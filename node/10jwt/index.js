const express = require('express');
const jwt = require('jsonwebtoken');
const keys = require('./settings/keys');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('key', keys.key);

app.get('/', (req, res) => res.json({ message: 'Hello, World!' }));
app.post('/signin', (req, res) => {
  if (req.body.username === 'pepita' && req.body.password === '1234') {
    const payload = { check: true };
    const token = jwt.sign(payload, app.get('key'), { expiresIn: '30000' });
    res.json({ message: 'Hello, Pepita!', token: token });
  } else {
    res.json({ message: 'Incorrect username and/or password' });
  }
});

const verification = express.Router();

app.listen(4000, () => console.log('Server running on port 4000'));
