const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-secret-key'; // 在实际生产环境中应该放在环境变量中

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: '未授权，请提供 token' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token 无效' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'librarian')) {
    next();
  } else {
    res.status(403).json({ message: '权限不足' });
  }
};

module.exports = { authMiddleware, adminMiddleware, JWT_SECRET };
