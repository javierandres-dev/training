const express = require('express');

const app = express();

app.listen(4000, () => console.log('Server running on port 4000'));

const Sequelize = require('sequelize');

const sequelize = new Sequelize('testing', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const namesModel = sequelize.define('names', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: Sequelize.STRING,
});

sequelize
  .authenticate()
  .then(() => console.log('Connected to MYSQL database'))
  .catch((err) => console.log('Not connected to MYSQL database, error: ', err));

namesModel
  .findAll({ attributes: ['id', 'name'] })
  .then((names) => {
    const res = JSON.stringify(names);
    console.log(res);
  })
  .catch((err) => console.log(err));
