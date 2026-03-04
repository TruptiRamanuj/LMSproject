import React from 'react';
import { motion } from 'framer-motion';
import { Book, Clock, Award, CheckCircle, Play, BarChart, Settings, User, Bell, Search, Filter } from 'lucide-react';

const enrolledCourses = [
    {
        id: 1,
        title: "Full-Stack Web Development",
        progress: 65,
        lessons: "12/24",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&auto=format&fit=crop&q=60",
        lastAccessed: "2 days ago"
    },
    {
        id: 2,
        title: "UI/UX Design Masterclass",
        progress: 30,
        lessons: "8/32",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=400&auto=format&fit=crop&q=60",
        lastAccessed: "5 hours ago"
    },
    {
        id: 3,
        title: "Advanced Data Science",
        progress: 90,
        lessons: "18/20",
        image: "https://images.unsplash.com/photo-1551288049-bbda38a5f971?w=400&auto=format&fit=crop&q=60",
        lastAccessed: "1 week ago"
    }
];

const Dashboard = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, Alex! 👋</h1>
                        <p className="text-slate-500">You've completed 75% of your weekly goal. Keep it up!</p>
                    </div>
                    <div className="flex space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none w-full md:w-64 shadow-sm"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        </div>
                        <button className="bg-white border border-slate-200 p-2.5 rounded-xl shadow-sm hover:bg-slate-50 transition-colors">
                            <Filter className="w-5 h-5 text-slate-600" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar / Stats */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                            <div className="flex items-center space-x-4 mb-6">
                                <img
                                    src="https://i.pravatar.cc/100?img=12"
                                    alt="Avatar"
                                    className="w-16 h-16 rounded-2xl object-cover ring-4 ring-primary-50"
                                />
                                <div>
                                    <h3 className="font-bold text-slate-900">Alex Rivera</h3>
                                    <p className="text-xs text-primary-600 font-bold uppercase">Pro Member</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {[
                                    { icon: Book, label: 'My Courses', active: true },
                                    { icon: Award, label: 'Certificates' },
                                    { icon: BarChart, label: 'Progression' },
                                    { icon: Bell, label: 'Notifications' },
                                    { icon: Settings, label: 'Settings' },
                                ].map((item, i) => (
                                    <button
                                        key={i}
                                        className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${item.active ? 'bg-primary-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span className="font-semibold">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                            <h4 className="font-bold mb-2">Upgrade to Premium</h4>
                            <p className="text-primary-100 text-xs mb-4">Get unlimited access to all expert-led courses.</p>
                            <button className="w-full bg-white text-primary-900 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-primary-50 transition-colors">
                                Go Premium
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { label: 'Courses in Progress', value: '4', icon: Play, color: 'blue' },
                                { label: 'Completed Courses', value: '12', icon: CheckCircle, color: 'green' },
                                { label: 'Learning Hours', value: '156h', icon: Clock, color: 'purple' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
                                    <div className={`p-4 rounded-xl bg-${stat.color}-50 text-${stat.color}-600`}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                                        <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* In Progress Courses */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-900">Recently Accessed</h3>
                                <button className="text-sm font-bold text-primary-600">View All</button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {enrolledCourses.map((course) => (
                                    <motion.div
                                        key={course.id}
                                        whileHover={{ y: -5 }}
                                        className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-4"
                                    >
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full sm:w-32 h-32 rounded-xl object-cover shrink-0"
                                        />
                                        <div className="flex-grow flex flex-col justify-between py-1">
                                            <div>
                                                <h4 className="font-bold text-slate-900 line-clamp-1 mb-1">{course.title}</h4>
                                                <p className="text-xs text-slate-500 mb-4 flex items-center">
                                                    <Clock className="w-3 h-3 mr-1" /> Last accessed {course.lastAccessed}
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-end">
                                                    <span className="text-xs font-bold text-slate-400">{course.lessons} Lessons</span>
                                                    <span className="text-xs font-bold text-primary-600">{course.progress}%</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-primary-600 rounded-full transition-all duration-500"
                                                        style={{ width: `${course.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Learning Activity */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-8">Learning Activity</h3>
                            <div className="h-48 flex items-end justify-between gap-2 px-4">
                                {[45, 78, 56, 90, 34, 67, 85].map((height, i) => (
                                    <div key={i} className="flex-grow group relative cursor-pointer">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${height}%` }}
                                            transition={{ duration: 0.8, delay: i * 0.1 }}
                                            className={`w-full rounded-t-lg transition-all ${i === 3 ? 'bg-primary-600 shadow-lg' : 'bg-primary-100 group-hover:bg-primary-200'}`}
                                        ></motion.div>
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {height} Hours
                                        </div>
                                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">
                                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
