import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, Book, User, Library } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg text-white transform group-hover:scale-105 transition-all duration-300">
            <Library size={24} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Modern Library
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {user ? (
            <>
              <Link to="/books" className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-2">
                <Book size={18} /> 图书列表
              </Link>
              <Link to="/my-borrows" className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-2">
                <Book size={18} /> 我的借阅
              </Link>
              <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
                    <User size={16} />
                  </div>
                  <span>{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                  title="退出登录"
                >
                  <LogOut size={18} />
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">登录</Link>
              <Link to="/register" className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-300">
                免费注册
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
