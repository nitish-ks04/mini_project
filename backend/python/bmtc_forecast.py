import pandas as pd
import sys
import json
from datetime import datetime, timedelta

# Load the CSV file
df_buses = pd.read_csv('python/bmtc_half_hourly_estimated_buses_45_days.csv')

# Preprocess 'Hour' column
df_buses['Hour'] = pd.to_timedelta(df_buses['Time'].astype(str).str.zfill(2) + ':00').dt.total_seconds() / 3600
df_buses['Hour'] = pd.to_datetime(df_buses['Hour'], unit='h').dt.time

def get_forecast(route_no):
    route_no = route_no.strip().upper()
    forecast = df_buses[df_buses['Route'].str.upper() == route_no].sort_values(by='Hour')
    if forecast.empty:
        return None

    # Convert time to string for JSON serialization
    forecast_records = forecast[['Hour', 'Estimated Buses Required']].to_dict(orient='records')

    for record in forecast_records:
        record['Hour'] = record['Hour'].isoformat()  # Convert to string format (HH:MM:SS)

    return forecast_records

def main():
    try:
        # Read input from stdin (data sent from Express)
        input_data = sys.stdin.read()
        data = json.loads(input_data)
        routes = data.get('routes', [])

        result = {}
        for route in routes:
            forecast = get_forecast(route)
            result[route] = forecast if forecast else f"No data for route {route}"

        # Return result as a JSON object
        print(json.dumps(result))

    except Exception as e:
        # If there is any error, print to stderr (which is captured by Express)
        print(f"Error: {str(e)}", file=sys.stderr)

if __name__ == "__main__":
    main()
