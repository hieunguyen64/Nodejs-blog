const path = require('path');
const express = require('express');

const app = new express();

app.use(express.static('public'));

app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.listen(4000, () => {
    console.log('App listening at 4000')
})