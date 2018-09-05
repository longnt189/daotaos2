const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('client/index');
});

router.get('/contact', (req, res) => {
    res.render('client/contact');
});

router.get('/post', (req, res) => {
    res.render('client/post');
});

router.get('/about', (req, res) => {
    res.render('client/about');
});

module.exports = router;