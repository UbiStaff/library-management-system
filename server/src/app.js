const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/borrow', require('./routes/borrowRoutes'));

// 根路由
app.get('/', (req, res) => {
  res.send('Library Management System API is running');
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: '服务器内部错误' });
});

// 启动服务器
if (require.main === module) {
  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
      await sequelize.authenticate();
      console.log('Database connected successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });
}

module.exports = app;
