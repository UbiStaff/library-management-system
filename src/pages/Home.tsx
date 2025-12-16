import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Clock, Search, Shield, Zap, ArrowRight, Library } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 text-white">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-slate-300">V1.0 正式发布</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              让知识管理
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"> 更智能 </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Lingma Library 为您提供全流程数字化图书管理解决方案，
              体验前所未有的高效与便捷。
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/books" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  开始借阅 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <Link to="/register" className="px-8 py-4 rounded-full text-lg font-semibold bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300">
                免费注册账号
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mockup / Visual Element */}
        <div className="container mx-auto px-4 relative z-10">
           <div className="mx-auto max-w-5xl bg-slate-800/50 rounded-t-2xl border border-slate-700/50 p-2 backdrop-blur-sm shadow-2xl">
              <div className="bg-slate-900 rounded-t-xl overflow-hidden aspect-[16/9] relative group flex items-center justify-center">
                 {/* Abstract UI representation */}
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
                 <div className="relative z-10 text-center">
                    <Library size={64} className="mx-auto mb-4 text-blue-500/50" />
                    <p className="text-slate-500 font-mono">System Dashboard Preview</p>
                 </div>
                 {/* Floating Elements */}
                 <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-2xl rotate-12 backdrop-blur-md border border-white/5 animate-pulse" />
                 <div className="absolute bottom-1/4 right-1/4 w-40 h-24 bg-purple-500/10 rounded-xl -rotate-6 backdrop-blur-md border border-white/5" />
              </div>
           </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">核心功能特性</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              专为现代化图书馆打造，满足您对效率和体验的所有想象
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon={<BookOpen size={28} className="text-blue-600" />}
              title="海量图书资源"
              desc="支持百万级图书数据毫秒级检索，智能分类算法让查找更精准。"
              color="bg-blue-50"
            />
            <FeatureCard 
              icon={<Zap size={28} className="text-purple-600" />}
              title="极速借阅流程"
              desc="全流程数字化操作，一键借阅、自动归还提醒，告别繁琐手续。"
              color="bg-purple-50"
            />
            <FeatureCard 
              icon={<Shield size={28} className="text-emerald-600" />}
              title="安全权限管理"
              desc="基于角色的访问控制（RBAC），确保数据安全与操作合规。"
              color="bg-emerald-50"
            />
            <FeatureCard 
              icon={<Clock size={28} className="text-orange-600" />}
              title="实时状态追踪"
              desc="借阅状态实时同步，逾期自动计算，让管理井井有条。"
              color="bg-orange-50"
            />
             <FeatureCard 
              icon={<Users size={28} className="text-pink-600" />}
              title="用户中心"
              desc="个性化用户仪表盘，借阅历史、收藏夹一目了然。"
              color="bg-pink-50"
            />
             <FeatureCard 
              icon={<Search size={28} className="text-cyan-600" />}
              title="智能检索"
              desc="支持多维度高级搜索，模糊匹配，快速定位目标图书。"
              color="bg-cyan-50"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
             
             <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">准备好开启智能阅读之旅了吗？</h2>
             <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto relative z-10">
               立即注册账号，免费体验现代化图书管理系统的所有高级功能。
             </p>
             <Link to="/register" className="relative z-10 inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-50 hover:shadow-lg transition-all transform hover:-translate-y-1">
               立即加入
             </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-75">
             <Library size={24} />
             <span className="font-bold text-lg text-slate-700">Lingma Library</span>
          </div>
          <p>© 2024 Lingma Library System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) => (
  <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {desc}
    </p>
  </div>
);
