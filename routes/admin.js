const express = require('express');
const routerAuth = require('../modules/auth/routes/admin');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/index');
});

router.get('/add', (req, res) => {
    res.render('admin/add');
});

router.get('/manage', (req, res) => {
    res.render('admin/manage');
});

router.use('/auth', routerAuth);

module.exports = router;