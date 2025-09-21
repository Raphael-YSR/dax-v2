const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

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

// Route for a specific trade within a month
app.get('/:month/:tradeNo', (req, res) => {
    res.sendFile(path.join(__dirname, 'perTrade.html'));
});

//Route to BTS
app.get('/bts', (req, res) => {
    res.sendFile(path.join(__dirname, 'bts.html'));
});

// Only start server if not in Vercel environment
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

// Export the app for Vercel
module.exports = app;