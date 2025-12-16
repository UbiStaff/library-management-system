# Modern Library - Modern Library Management System

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/frontend-React-61DAFB.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/backend-Node.js-339933.svg)](https://nodejs.org/)
[![SQLite](https://img.shields.io/badge/database-SQLite-003B57.svg)](https://www.sqlite.org/)

[中文文档](README_CN.md) | [English Documentation](README.md)

Modern Library is a full-stack library management system developed with React and Node.js, featuring a modern UI design to provide a smooth user experience and efficient library management functions.

## ✨ Core Features

- 📚 **Book Management**: Support adding, editing, deleting, querying books, inventory management, and category retrieval.
- 🔍 **Smart Search**: Support multi-condition fuzzy search by title, author, ISBN, etc.
- 📖 **Borrowing System**: Full-process digital borrowing and returning, automatic calculation of overdue status.
- 👤 **User Center**: Distinguish between administrator and reader permissions, providing personalized user dashboards.
- 🎨 **Modern UI**: Responsive interface built with TailwindCSS, adapting to various devices.
- 📊 **Data Visualization**: Intuitively display borrowing statistics and system operation status.

## 🛠 Tech Stack

### Frontend
- **React 18**: Core library for building user interfaces
- **TypeScript**: Provides static type checking to improve code quality
- **TailwindCSS**: Atomic CSS framework for quickly building modern interfaces
- **Vite**: Blazing fast frontend build tool
- **Lucide React**: Beautiful icon library
- **React Router**: SPA routing management

### Backend
- **Node.js**: JavaScript runtime environment
- **Express**: Fast, unopinionated, minimalist web framework
- **Sequelize**: Promise-based Node.js ORM
- **SQLite**: Lightweight embedded database, no complex configuration required

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/UbiStaff/library-management-system.git
   cd library-management-system
   ```

2. **Initialize Backend**
   ```bash
   cd server
   npm install
   # Initialize database (creates default admin account and test data)
   npm run init-db
   # Start backend service (runs on port 3001)
   npm start
   ```

3. **Start Frontend**
   Open a new terminal window:
   ```bash
   # Return to project root
   npm install
   # Start development server (runs on port 5173)
   npm run dev
   ```

4. **Access System**
   Open `http://localhost:5173` in your browser.

### Default Account

- **Admin Account**: `admin@library.com`
- **Password**: `admin123`

## 📂 Project Structure

```
├── server/                 # Backend code
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── controllers/   # Business logic controllers
│   │   ├── middleware/    # Middleware (Auth, permissions, etc.)
│   │   ├── models/        # Sequelize data models
│   │   ├── routes/        # API route definitions
│   │   └── scripts/       # Database initialization scripts
│   └── database.sqlite    # SQLite database file
│
├── src/                    # Frontend code
│   ├── components/        # Public components (Navbar, etc.)
│   ├── context/           # React Context (Auth, etc.)
│   ├── pages/             # Page components (Home, Login, Books, etc.)
│   ├── services/          # API request encapsulation
│   └── main.tsx           # Entry file
│
├── README.md              # English documentation
└── README_CN.md           # Chinese documentation
```

## 📝 Roadmap

- [ ] Add book cover upload function
- [ ] Add email notification for overdue borrowing
- [ ] Support Excel batch import of books
- [ ] Integrate ECharts data dashboard

## 🤝 Contributing

Issues and Pull Requests are welcome! If you have any suggestions or find any bugs, please feel free to contact us.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
