const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const bcryptjs = require('bcryptjs');

app.post('/signup', async (req, res) => {
  const passwordHash = await bcryptjs.hash(req.body.password, 8);
  const body = {
    username: req.body.username,
    password: passwordHash,
    role: req.body.role,
  };
  connection.query('INSERT INTO users SET ?', body, async (err, result) => {
    if (err) {
      res.json({ message: 'User not created' });
      console.error('User not created, error: ', err);
    } else {
      res.json({ message: 'User created successfully' });
    }
  });
});

const session = require('express-session');
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

app.post('/signin', async (req, res) => {
  const passwordHash = await bcryptjs.hash(req.body.password, 8);
  const body = {
    username: req.body.username,
    password: passwordHash,
  };
  connection.query(
    'SELECT * FROM users WHERE username = ?',
    body.username,
    async (err, result) => {
      if (err) {
        res.json({ message: 'User not found, error' });
        console.error('User not found, error: ', err);
      } else {
        if (
          result.length === 0 ||
          !(await bcryptjs.compare(req.body.password, result[0].password))
        ) {
          res.json({
            message: 'Incorrect username and/or password',
          });
        } else {
          req.session.loggedin = true;
          req.session.username = result[0].username;
          res.json({ message: 'User found, successfully logged in' });
        }
      }
    }
  );
});

app.get('/dashboard', (req, res) => {
  if (req.session.loggedin) {
    res.json({ message: '... in dashboard ...', user: req.session.username });
  } else {
    res.json({ message: 'unauthorized access' });
  }
});

app.get('/signout', (req, res) => {
  req.session.destroy(() => {
    res.json({ message: 'Session closed successfully' });
  });
});

app.listen(4000, (req, res) => {
  console.info('Server is running in port 4000');
});

const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

const connection = require('./database/db');
