import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, MapPin } from 'lucide-react';

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const posts = [
    {
      id: 1,
      title: 'Building a React Dashboard',
      author: 'John Doe',
      description: 'Learn how to create a modern dashboard with React and TailwindCSS.',
      image: 'https://via.placeholder.com/300x200',
      date: '2023-10-01'
    },
    {
      id: 2,
      title: 'AI-Powered Chat Application',
      author: 'Jane Smith',
      description: 'Develop a real-time chat app with AI integration using Node.js.',
      image: 'https://via.placeholder.com/300x200',
      date: '2023-09-28'
    },
    {
      id: 3,
      title: 'Mobile App Development with Flutter',
      author: 'Mike Johnson',
      description: 'Create cross-platform mobile apps with Flutter and Dart.',
      image: 'https://via.placeholder.com/300x200',
      date: '2023-09-25'
    }
  ];

  const teams = [
    {
      id: 1,
      name: 'Web Dev Wizards',
      description: 'A team of passionate web developers building amazing user experiences.',
      requirements: 'React, Node.js, MongoDB',
      members: 5
    },
    {
      id: 2,
      name: 'AI Innovators',
      description: 'Exploring the frontiers of artificial intelligence and machine learning.',
      requirements: 'Python, TensorFlow, Data Science',
      members: 8
    },
    {
      id: 3,
      name: 'Mobile Masters',
      description: 'Crafting intuitive mobile applications for iOS and Android.',
      requirements: 'Flutter, React Native, Swift',
      members: 6
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Tab Switcher */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-6">
              Explore
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover amazing projects and join talented teams to build the future together.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('posts')}
                className={`px-6 py-3 rounded-md font-semibold transition duration-200 ${
                  activeTab === 'posts'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:text-orange-500'
                }`}
              >
                Posts
              </button>
              <button
                onClick={() => setActiveTab('teams')}
                className={`px-6 py-3 rounded-md font-semibold transition duration-200 ${
                  activeTab === 'teams'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:text-orange-500'
                }`}
              >
                Teams
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      {activeTab === 'posts' && (
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-4">Latest Posts</h2>
              <p className="text-gray-400 text-lg text-center">Stay updated with the latest projects and tutorials</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
                >
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                    <div className="flex items-center text-gray-400 mb-3">
                      <User size={16} className="mr-2" />
                      <span className="text-sm">{post.author}</span>
                      <Calendar size={16} className="ml-4 mr-2" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <p className="text-gray-300">{post.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Teams Section */}
      {activeTab === 'teams' && (
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-4">Join a Team</h2>
              <p className="text-gray-400 text-lg text-center">Find your perfect team and start collaborating on exciting projects</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teams.map((team, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{team.name}</h3>
                  <p className="text-gray-300 mb-4">{team.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Requirements:</p>
                    <p className="text-sm text-orange-400">{team.requirements}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{team.members} members</span>
                    <div className="flex gap-2">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-200">
                        Read More
                      </button>
                      <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg font-semibold transition duration-200">
                        Apply
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ExplorePage;
