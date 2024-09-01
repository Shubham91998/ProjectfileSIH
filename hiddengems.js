const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Routes
app.post('/upload', upload.single('image'), (req, res) => {
    const { title, description, price } = req.body;
    const image = req.file.filename;
    // Handle the upload data (e.g., save to database)
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}`);
    console.log(`Price: ${price}`);
    console.log(`Image: ${image}`);
    res.send('Item uploaded successfully!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Handle login (e.g., check credentials)
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    res.send('Login successful!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
