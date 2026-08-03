"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Calendar, ChevronUp, X, XCircleIcon, 
  ExternalLink, Sparkles, Zap, Globe, 
  Database, Server, Send, MessageCircle,
  TrendingUp, Users, Clock, Tag
} from "lucide-react";

export default function News() {
    // News state
    const [newsData, setNewsData] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);
    const [newsError, setNewsError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedNews, setSelectedNews] = useState(null);
    const newsPerPage = 6;

    // Get unique categories from news
    const categories = ['all', ...new Set(newsData.map(item => item.category))];

    // Filter news based on selected category
    const filteredNews = selectedCategory === 'all' 
        ? newsData 
        : newsData.filter(item => item.category === selectedCategory);

    // Pagination
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
    const totalPages = Math.ceil(filteredNews.length / newsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Fetch news data
    useEffect(() => {
        const fetchNews = async () => {
            try {
                setNewsLoading(true);
                const response = await fetch('https://babilan-backend.onrender.com/news/tik-news');
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                setNewsData(data);
            } catch (err) {
                setNewsError(err.message);
                console.error('Error fetching news:', err);
            } finally {
                setNewsLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <section id="news" className="py-32 relative">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
                        <span className="text-primary font-semibold tracking-widest text-sm uppercase">Live Feed</span>
                        <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                            Telegram
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                            News Aggregator
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
                        Real-time news aggregation powered by <span className="text-primary font-semibold">FastAPI</span> backend 
                        that scrapes and curates content from <span className="text-primary font-semibold">Telegram</span> channels
                    </p>
                    
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full">
                            <Server className="w-4 h-4 text-primary" />
                            <span className="text-sm text-gray-300">FastAPI</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full">
                            <Send className="w-4 h-4 text-primary" />
                            <span className="text-sm text-gray-300">Telegram API</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full">
                            <Database className="w-4 h-4 text-primary" />
                            <span className="text-sm text-gray-300">Real-time Scraping</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full">
                            <Globe className="w-4 h-4 text-primary" />
                            <span className="text-sm text-gray-300">REST API</span>
                        </div>
                    </div>
                </div>

                {/* Project Description */}
                <div className="max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MessageCircle className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">About This Project</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    This news aggregator is built with <span className="text-primary font-medium">FastAPI</span> as the backend framework, 
                                    utilizing the <span className="text-primary font-medium">Telegram API</span> to scrape and curate news from various 
                                    Telegram channels. The system automatically fetches, categorizes, and stores news articles 
                                    in real-time, making them available through a RESTful API endpoint.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                        <span>Real-time scraping from Telegram channels</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        <span>Automatic content categorization</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                        <span>RESTful API for easy integration</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                        <span>Image extraction and storage</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Category Filters */}
                {!newsLoading && !newsError && newsData.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setCurrentPage(1);
                                }}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize flex items-center gap-2 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                                        : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }`}
                            >
                                {category === 'all' ? (
                                    <Globe className="w-4 h-4" />
                                ) : (
                                    <Tag className="w-4 h-4" />
                                )}
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                {/* Loading State */}
                {newsLoading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-gray-700 border-t-primary rounded-full animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                            </div>
                            <p className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm whitespace-nowrap">
                                Fetching latest news...
                            </p>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {newsError && (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center gap-3 px-6 py-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                            <XCircleIcon className="text-red-500 w-6 h-6" />
                            <p className="text-red-400">Failed to load news: {newsError}</p>
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 px-6 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* News Grid */}
                {!newsLoading && !newsError && (
                    <>
                        {currentNews.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {currentNews.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group"
                                        >
                                            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                                                {/* News Image */}
                                                {item.image_path && (
                                                    <div className="relative h-48 overflow-hidden">
                                                        <Image
                                                            src={item.image_path}
                                                            alt={`News ${item.id}`}
                                                            width={400}
                                                            height={300}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                            unoptimized
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                                                        
                                                        {/* Category Badge */}
                                                        <div className="absolute top-4 right-4">
                                                            <span className="px-3 py-1 bg-primary/90 text-white text-xs rounded-full font-medium flex items-center gap-1">
                                                                <Tag className="w-3 h-3" />
                                                                {item.category}
                                                            </span>
                                                        </div>
                                                        
                                                        {/* Views Badge */}
                                                        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                            <span className="text-sm flex items-center gap-1">
                                                                <Users className="w-3 h-3" />
                                                                {item.views?.toLocaleString() || 0}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                                
                                                {/* News Content */}
                                                <div className="p-6 flex-grow flex flex-col">
                                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{item.telegram_date ? new Date(item.telegram_date).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric'
                                                        }) : 'Date N/A'}</span>
                                                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {item.telegram_date ? new Date(item.telegram_date).toLocaleTimeString('en-US', {
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            }) : 'Time N/A'}
                                                        </span>
                                                    </div>
                                                    
                                                    <div 
                                                        className="text-gray-300 leading-relaxed flex-grow overflow-hidden max-h-40 text-sm"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.text
                                                                .split('\n')
                                                                .slice(0, 4)
                                                                .join('\n')
                                                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                                                                .replace(/@\w+/g, match => `<span class="text-primary">${match}</span>`)
                                                                .replace(/#\w+/g, match => `<span class="text-primary">${match}</span>`)
                                                        }}
                                                    />
                                                    
                                                    <button
                                                        onClick={() => setSelectedNews(item)}
                                                        className="mt-4 flex items-center gap-2 text-primary hover:text-white transition-colors group/btn"
                                                    >
                                                        <span>Read Full Story</span>
                                                        <ChevronUp className="transform rotate-90 group-hover/btn:translate-x-1 transition-transform" size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center mt-12 gap-2 flex-wrap">
                                        <button
                                            onClick={() => paginate(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                                currentPage === 1
                                                    ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                                                    : 'bg-gray-800 hover:bg-primary text-white hover:scale-105'
                                            }`}
                                        >
                                            Previous
                                        </button>
                                        
                                        {[...Array(totalPages)].map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => paginate(index + 1)}
                                                className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                                                    currentPage === index + 1
                                                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                                }`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                        
                                        <button
                                            onClick={() => paginate(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                                currentPage === totalPages
                                                    ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                                                    : 'bg-gray-800 hover:bg-primary text-white hover:scale-105'
                                            }`}
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}

                                {/* News Stats */}
                                <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
                                    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl px-6 py-4">
                                        <div className="flex items-center gap-2 justify-center">
                                            <TrendingUp className="text-primary w-5 h-5" />
                                            <span className="text-gray-400">Total Articles</span>
                                        </div>
                                        <p className="text-2xl font-bold text-white">{newsData.length}</p>
                                    </div>
                                    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl px-6 py-4">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Tag className="text-primary w-5 h-5" />
                                            <span className="text-gray-400">Categories</span>
                                        </div>
                                        <p className="text-2xl font-bold text-white">{categories.length - 1}</p>
                                    </div>
                                    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl px-6 py-4">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Zap className="text-primary w-5 h-5" />
                                            <span className="text-gray-400">Live Feed</span>
                                        </div>
                                        <div className="flex items-center gap-2 justify-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-green-400">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-20">
                                <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-800/30 border border-gray-700 rounded-xl">
                                    <MessageCircle className="text-gray-500 w-6 h-6" />
                                    <p className="text-gray-400">No news available in this category.</p>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* News Detail Modal */}
            {selectedNews && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 overflow-y-auto">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="relative max-w-3xl w-full bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 overflow-hidden my-8"
                    >
                        <button
                            onClick={() => setSelectedNews(null)}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-gray-800/50 backdrop-blur-sm rounded-full p-2 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        {selectedNews.image_path && (
                            <div className="relative h-80">
                                <Image
                                    src={selectedNews.image_path}
                                    alt={`News ${selectedNews.id}`}
                                    width={800}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                                <div className="absolute bottom-4 left-6 flex items-center gap-3 flex-wrap">
                                    <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full font-medium flex items-center gap-1">
                                        <Tag className="w-3 h-3" />
                                        {selectedNews.category}
                                    </span>
                                    <span className="text-white/80 text-sm flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <Users className="w-3 h-3" />
                                        {selectedNews.views?.toLocaleString() || 0} views
                                    </span>
                                    {selectedNews.channel && (
                                        <span className="text-white/80 text-sm flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full">
                                            <Send className="w-3 h-3" />
                                            {selectedNews.channel}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                        
                        <div className="p-8">
                            <div className="flex items-center gap-3 text-gray-400 text-sm mb-4 flex-wrap">
                                <Calendar className="w-4 h-4" />
                                <span>{selectedNews.telegram_date ? new Date(selectedNews.telegram_date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) : 'Date not available'}</span>
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                <Clock className="w-4 h-4" />
                                <span>{selectedNews.telegram_date ? new Date(selectedNews.telegram_date).toLocaleTimeString('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                }) : 'Time not available'}</span>
                            </div>
                            
                            <div 
                                className="text-gray-300 leading-relaxed space-y-4"
                                dangerouslySetInnerHTML={{
                                    __html: selectedNews.text
                                        .split('\n')
                                        .map(line => line.trim() ? `<p class="mb-4">${line}</p>` : '')
                                        .join('')
                                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                                        .replace(/@\w+/g, match => `<span class="text-primary">${match}</span>`)
                                        .replace(/#\w+/g, match => `<span class="text-primary">${match}</span>`)
                                }}
                            />
                            
                            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap justify-between items-center gap-4">
                                <div className="text-sm text-gray-500 flex items-center gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Source: Telegram</span>
                                    {selectedNews.channel && (
                                        <span className="text-gray-400">• {selectedNews.channel}</span>
                                    )}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setSelectedNews(null)}
                                        className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
}