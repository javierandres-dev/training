const express = require('express');

const app = express();

app.listen(4000, () => console.log('Server running on port 4000'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello, World!' }));

const jwt = require('jsonwebtoken');
const keys = require('./settings/keys');

app.set('key', keys.key);

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
verification.use((req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (!token) {
    return res.json({ message: 'Denied access, token mandatory' });
  }
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, app.get('key'), (error, decoded) => {
      if (error) {
        return res.json({ message: 'Invalid token' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
});

app.get('/info', verification, (req, res) => {
  res.json({ message: 'in info ... private content ...' });
});
