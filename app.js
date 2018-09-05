const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routerClient = require('./routes/client');
const routerAdmin = require('./routes/admin');

const app = express();

mongoose.connect('mongodb://admin:abc123@ds245132.mlab.com:45132/demo');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/admin', routerAdmin);
app.use(routerClient);

app.listen(3000, (err) => {
    if (err) {
        console.log('Server error');
        return;
    }

    console.log('Server running port 3000');
});