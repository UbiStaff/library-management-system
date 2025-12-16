import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Search } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  publisher: string;
  publishYear: number;
  availableCopies: number;
}

export const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const data = await api.get(`/books?search=${search}`);
      setBooks(data);
    } catch (error) {
      console.error('Failed to fetch books', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBooks();
  };

  const handleBorrow = async (bookId: string) => {
    try {
      await api.post('/borrow', { bookId });
      alert('借阅成功！');
      fetchBooks(); // 刷新列表以更新库存
    } catch (error: any) {
      alert(error.message || '借阅失败');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">图书列表</h1>
      
      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索书名、作者或ISBN..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          搜索
        </button>
      </form>

      {loading ? (
        <div className="text-center py-8">加载中...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{book.title}</h3>
              <p className="text-gray-600 mb-1">作者: {book.author}</p>
              <p className="text-gray-600 mb-1">出版社: {book.publisher}</p>
              <p className="text-gray-600 mb-1">分类: {book.category}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className={`text-sm font-medium ${book.availableCopies > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  库存: {book.availableCopies}
                </span>
                {user && (
                  <button
                    onClick={() => handleBorrow(book.id)}
                    disabled={book.availableCopies <= 0}
                    className={`px-4 py-2 rounded-md text-white text-sm ${
                      book.availableCopies > 0
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {book.availableCopies > 0 ? '借阅' : '暂无库存'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
