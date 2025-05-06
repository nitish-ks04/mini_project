const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const cors = require('cors');

// Enable CORS for all routes
router.use(cors()); // This will allow all incoming requests from different origins

router.post('/forecast', (req, res) => {
  const routes = req.body.routes;

  const python = spawn('python', ['python/bmtc_forecast.py']);

  // Send data to Python script
  python.stdin.write(JSON.stringify({ routes }));
  python.stdin.end();

  let dataBuffer = '';

  // Read data from Python stdout
  python.stdout.on('data', (data) => {
    dataBuffer += data.toString();
  });

  // Capture any Python errors
  python.stderr.on('data', (data) => {
    console.error('Python error:', data.toString());
  });

  // When Python script finishes execution
  python.on('close', (code) => {
    try {
      const result = JSON.parse(dataBuffer);
      res.json(result);
    } catch (error) {
      console.error('Failed to parse Python output:', dataBuffer);
      res.status(500).json({ error: 'Failed to fetch forecast' });
    }
  });
});

module.exports = router;
