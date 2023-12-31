const express = require('express');
const path = require('path');  // Import the path module
const app = express();
const PORT = 5000;

// Integrate our backend with the React frontend
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// An API endpoint, that returns JSON data
// Our react app calls this endpoint through a button click
app.get('/api/message', (req, res) => {
    res.json({ message: 'JSON Response from: Node.js Express' });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {  // Use '*' to catch all other routes
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
