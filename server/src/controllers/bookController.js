const { Book, Sequelize } = require('../models');
const { Op } = Sequelize;

exports.getAllBooks = async (req, res) => {
  try {
    const { search, category } = req.query;
    const where = {};

    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { author: { [Op.like]: `%${search}%` } },
        { isbn: { [Op.like]: `%${search}%` } }
      ];
    }

    if (category) {
      where.category = category;
    }

    const books = await Book.findAll({ where });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: '获取图书列表失败' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: '图书未找到' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: '获取图书详情失败' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: '创建图书失败' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: '图书未找到' });
    }
    await book.update(req.body);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: '更新图书失败' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: '图书未找到' });
    }
    await book.destroy();
    res.json({ message: '图书已删除' });
  } catch (error) {
    res.status(500).json({ message: '删除图书失败' });
  }
};
