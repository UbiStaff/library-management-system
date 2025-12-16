const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING
  },
  publisher: {
    type: DataTypes.STRING
  },
  publishYear: {
    type: DataTypes.INTEGER
  },
  totalCopies: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  availableCopies: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  coverUrl: {
    type: DataTypes.STRING
  }
});

module.exports = Book;
