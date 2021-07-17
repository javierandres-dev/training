const express = require('express');

const app = express();

app.listen(4000, () => console.log('Server running on port 4000'));

const session = require('express-session');
/*
app.use(
  session({
    secret: '9876',
    resave: true,
    saveUninitialized: true,
  })
);
*/
const MySQLStore = require('express-mysql-session');
const options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'testing_session',
};

const sessionStore = new MySQLStore(options);

app.use(
  session({
    key: 'user_cookie',
    store: sessionStore,
    secret: '9876',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  req.session.username = 'natis';
  req.session.role = 'guess';
  req.session.visits = req.session.visits ? ++req.session.visits : 1;
  //console.log(req.session);
  res.json({ message: 'Hello, World!', amount: req.session.visits });
});
