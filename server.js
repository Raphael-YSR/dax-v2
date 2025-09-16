const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the same directory
app.use(express.static(path.join(__dirname)));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the deals page
app.get('/deals', (req, res) => {
    res.sendFile(path.join(__dirname, 'deals.html'));
});

// Route for a specific month's trades
app.get('/:month', (req, res) => {
    res.sendFile(path.join(__dirname, 'perMonth.html'));
});

// Route for a specific trade within a month - FIXED ROUTE
app.get('/:month/:tradeNo', (req, res) => {
    res.sendFile(path.join(__dirname, 'perTrade.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});