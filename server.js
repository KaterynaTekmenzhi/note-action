const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

app.use(express.static('public'));

// Get Route for home page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Get Route for notes page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
);
// 

// Start Server
app.listen(PORT, () => {
    console.log(`App listening on 'http://localhost:${PORT}'`);
});