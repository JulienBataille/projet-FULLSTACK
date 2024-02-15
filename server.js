const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

const {connectDb} = require('./services/mongoose');
connectDb().catch(err => console.log(err));

app.set('view engine', 'ejs');
app.set ('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen((process.env.PORT || 3000), () => {
    console.log(`Le serveur est lancé à : http://localhost:3000`)
});