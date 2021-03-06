require('dotenv').config();
const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const morgan = require('morgan');
const path = require('path');
const indexRouter = require('./src/routes/index.router');
const roversRouter = require('./src/routes/rovers.router');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('cookieName', 'sid');
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));
app.set('views', path.join(process.env.PWD, 'src', 'views'));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/', indexRouter);
app.use('/rovers', roversRouter);

app.listen(PORT, () => {
  console.log('Server has been started on PORT', PORT);
});
