const express = require('express');

const app = express();

require('dotenv').config({ path: './.env' });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

const bcrypt = require('bcryptjs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/signin', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    if (username === 'pepita' && password === '1234') {
      const passwordHash = await bcrypt.hash(password, 1);
      res.json({ message: 'Hello, Pepita!', pass: passwordHash });
    } else {
      res.json({ message: 'Incorrect username and/or password' });
    }
  }
});
