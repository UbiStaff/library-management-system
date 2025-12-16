const { BorrowRecord, Book, User, Sequelize } = require('../models');
const { Op } = Sequelize;

// 借书
exports.borrowBook = async (req, res) => {
  const transaction = await BorrowRecord.sequelize.transaction();
  try {
    const { bookId } = req.body;
    const userId = req.user.id;

    const book = await Book.findByPk(bookId, { transaction });
    if (!book) {
      await transaction.rollback();
      return res.status(404).json({ message: '图书未找到' });
    }

    if (book.availableCopies <= 0) {
      await transaction.rollback();
      return res.status(400).json({ message: '库存不足' });
    }

    // 创建借阅记录
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30); // 默认借阅30天

    const record = await BorrowRecord.create({
      userId,
      bookId,
      dueDate
    }, { transaction });

    // 更新库存
    await book.decrement('availableCopies', { transaction });

    await transaction.commit();
    res.status(201).json(record);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ message: '借阅失败' });
  }
};

// 还书
exports.returnBook = async (req, res) => {
  const transaction = await BorrowRecord.sequelize.transaction();
  try {
    const { id } = req.params; // 借阅记录ID

    const record = await BorrowRecord.findByPk(id, { transaction });
    if (!record) {
      await transaction.rollback();
      return res.status(404).json({ message: '借阅记录未找到' });
    }

    if (record.status === 'returned') {
      await transaction.rollback();
      return res.status(400).json({ message: '该图书已归还' });
    }

    // 更新借阅记录
    record.status = 'returned';
    record.returnDate = new Date();
    await record.save({ transaction });

    // 更新库存
    const book = await Book.findByPk(record.bookId, { transaction });
    await book.increment('availableCopies', { transaction });

    await transaction.commit();
    res.json({ message: '归还成功', record });
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ message: '归还失败' });
  }
};

// 获取用户的借阅记录
exports.getMyBorrows = async (req, res) => {
  try {
    const records = await BorrowRecord.findAll({
      where: { userId: req.user.id },
      include: [
        { model: Book, attributes: ['title', 'author'] }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: '获取借阅记录失败' });
  }
};

// 管理员获取所有借阅记录
exports.getAllBorrows = async (req, res) => {
  try {
    const records = await BorrowRecord.findAll({
      include: [
        { model: User, attributes: ['name', 'email'] },
        { model: Book, attributes: ['title'] }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: '获取借阅记录失败' });
  }
};
