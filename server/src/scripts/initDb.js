const { sequelize, User, Book } = require('../models');
const bcrypt = require('bcryptjs');

async function initDb() {
  try {
    await sequelize.sync({ force: true }); // 强制重新创建表
    console.log('数据库表已同步');

    // 创建管理员
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await User.create({
      name: '系统管理员',
      email: 'admin@library.com',
      password: hashedPassword,
      role: 'admin'
    });
    console.log('管理员账号已创建: admin@library.com / admin123');

    // 创建测试图书
    await Book.bulkCreate([
      {
        title: 'JavaScript高级程序设计',
        author: 'Nicholas C. Zakas',
        isbn: '9787115275790',
        category: '编程技术',
        publisher: '人民邮电出版社',
        publishYear: 2012,
        totalCopies: 5,
        availableCopies: 5
      },
      {
        title: '深入浅出React和Redux',
        author: '程墨',
        isbn: '9787111564225',
        category: '编程技术',
        publisher: '机械工业出版社',
        publishYear: 2017,
        totalCopies: 3,
        availableCopies: 3
      },
       {
        title: '百年孤独',
        author: '加西亚·马尔克斯',
        isbn: '9787544253994',
        category: '文学小说',
        publisher: '南海出版公司',
        publishYear: 2011,
        totalCopies: 2,
        availableCopies: 2
      }
    ]);
    console.log('测试图书数据已创建');

  } catch (error) {
    console.error('数据库初始化失败:', error);
  } finally {
    await sequelize.close();
  }
}

initDb();
