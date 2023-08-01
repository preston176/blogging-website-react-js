const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use json-server middleware to handle API requests
const jsonRouter = jsonServer.router('db.json');
app.use('/api', jsonRouter);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});