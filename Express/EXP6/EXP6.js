const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
function serveHtml(file, res) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err)
            return res.status(500).send('Error reading html file');

        res.type('html').send(data);
    });
}
app.get('/', (req, res) => serveHtml('index.html', res));
app.get('/about', (req, res) => serveHtml('about.html', res));
app.get('/contact', (req, res) => serveHtml('contact.html', res));
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});