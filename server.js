const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');
const bookRouter = require('./routes/books');

const {connectDb} = require('./services/mongoose');
connectDb().catch(err => console.log(err));

app.set('view engine', 'ejs');
app.set ('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))

app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/books', bookRouter);

app.listen((process.env.PORT || 3000), () => {
    console.log(`Le serveur est lancé à : http://localhost:3000`)
});