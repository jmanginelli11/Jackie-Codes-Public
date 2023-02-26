const Sequelize = require('sequelize');
const db = require('./database');
const axios = require('axios');

const Project = db.define('project', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  url: {
    type: Sequelize.TEXT,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Project;
