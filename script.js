const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-feedback', (req, res) => {
    const { name, email, feedback } = req.body;
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Feedback: ${feedback}`);
    res.send('Thank you for your feedback!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
