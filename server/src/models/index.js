const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./Book');
const BorrowRecord = require('./BorrowRecord');

// 关联定义
User.hasMany(BorrowRecord, { foreignKey: 'userId' });
BorrowRecord.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(BorrowRecord, { foreignKey: 'bookId' });
BorrowRecord.belongsTo(Book, { foreignKey: 'bookId' });

module.exports = {
  sequelize,
  Sequelize,
  User,
  Book,
  BorrowRecord
};
