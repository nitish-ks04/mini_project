const express = require('express');
const bodyParser = require('body-parser');
const forecastRoute = require('./routes/forecast');

const app = express();
app.use(bodyParser.json());

app.use('/api', forecastRoute);

app.listen(5000, () => console.log('Server running on port 5000'));
