const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// 用户借阅操作
router.post('/', authMiddleware, borrowController.borrowBook);
router.get('/my', authMiddleware, borrowController.getMyBorrows);

// 还书（可以是用户操作，也可以是管理员操作，这里简化为登录用户归还自己的，或者管理员归还）
// 实际场景通常是管理员扫码归还，或者用户自助还书机
// 这里我们允许用户自己点归还（为了演示），或者管理员帮还
router.post('/return/:id', authMiddleware, borrowController.returnBook);

// 管理员查看所有记录
router.get('/', authMiddleware, adminMiddleware, borrowController.getAllBorrows);

module.exports = router;
