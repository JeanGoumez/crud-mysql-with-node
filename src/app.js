const express = require('express');
const myConnection = require('express-myconnection');
const mysql = require('mysql');
const path = require('path');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const app = express();

//port 3000
app.set('port', process.env.PORT || 3000);

//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(morgan('dev'));
app.use(
  myConnection(
    mysql,
    {
      host: 'localhost',
      user: 'root',
      password: 'admin',
      port: 3306,
      database: 'academico',
    },
    'single'
  )
);

app.listen(app.get('port'), () => {
  console.log('server on');
});
