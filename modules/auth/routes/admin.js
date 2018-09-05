const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('admin/login');
});

router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);

    res.redirect('/admin');
});

module.exports = router;