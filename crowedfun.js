const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Mock database
const campaigns = [];
const users = []; // For simplicity

// Routes
app.post('/create-campaign', (req, res) => {
    const { title, description, goal, contact } = req.body;
    // Save campaign to the database
    campaigns.push({ title, description, goal, contact, donations: 0 });
    res.send('Campaign created successfully!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check user credentials (simplified)
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.send('Login successful!');
    } else {
        res.send('Login failed!');
    }
});

app.get('/campaigns', (req, res) => {
    res.json(campaigns);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
