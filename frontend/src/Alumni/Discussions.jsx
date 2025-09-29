// Alumni/Discussion.js
import React, { useState } from 'react';
import { MessageSquare, Users, Clock, Plus, Search } from 'lucide-react';

const Discussions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const discussions = [
    {
      id: 1,
      title: 'Career Opportunities in Tech',
      author: 'John Doe',
      replies: 23,
      lastActivity: '2 hours ago',
      category: 'Career',
      excerpt: 'Looking for advice on transitioning into tech industry...'
    },
    {
      id: 2,
      title: 'Alumni Meetup Planning',
      author: 'Jane Smith',
      replies: 15,
      lastActivity: '5 hours ago',
      category: 'Events',
      excerpt: 'Planning our annual alumni meetup. Share your ideas...'
    },
    {
      id: 3,
      title: 'Mentorship Program Launch',
      author: 'Mike Johnson',
      replies: 8,
      lastActivity: '1 day ago',
      category: 'Mentorship',
      excerpt: 'Excited to announce our new mentorship program...'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Community Discussions</h1>
            <p className="text-gray-600 mt-2">Connect and engage with fellow alumni</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus size={20} />
            <span>New Discussion</span>
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-600 cursor-pointer">
                    {discussion.title}
                  </h3>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                    {discussion.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{discussion.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>By {discussion.author}</span>
                  <div className="flex items-center space-x-1">
                    <MessageSquare size={16} />
                    <span>{discussion.replies} replies</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{discussion.lastActivity}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussions;