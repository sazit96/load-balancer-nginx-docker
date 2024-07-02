const express = require('express');
const os = require('os');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send(
    `[${new Date().toISOString()}] Received request on ${os.hostname()} from ${
      req.ip
    }`
  );
});

app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});
