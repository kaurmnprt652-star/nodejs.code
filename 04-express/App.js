const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// for serving static files

app.use('/static',express.static('static'))

// set the template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set('views', path.join(__dirname, 'views'));

// Our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'Hey Preet', message: 'Hello there and welcome to my first express app with pug template engine' });
});

app.get("/", (req, res) => {
    res.status(200).send("This is my first homepage express app");
});
app.get("/about", (req, res) => {
    res.send("This is my about pagr express app");
});


app.post("/about", (req, res) => {
    res.send("This is a post request about page of my first express app");
});

app.get("/this", (req, res) => {
    res.status(404).send("This page is not found on my website preet");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});