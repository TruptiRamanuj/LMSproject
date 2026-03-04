import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl -z-10 opacity-60"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-bold mb-6">
                                🚀 #1 Online Learning Platform
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                                Master New Skills with <br />
                                <span className="text-primary-600 relative">
                                    Expert-Led
                                    <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10, 100 5" stroke="#38bdf8" strokeWidth="4" fill="transparent" />
                                    </svg>
                                </span> Courses
                            </h1>
                            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
                                Join a global community of learners and professionals. Get access to 5,000+ top-rated courses and learn at your own pace.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold flex items-center shadow-lg hover:bg-primary-700 hover:shadow-primary-200 transition-all hover:-translate-y-1">
                                    Start Learning Now <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                                <button className="flex items-center space-x-2 text-slate-700 font-bold hover:text-primary-600 transition-colors p-4 group">
                                    <div className="bg-white p-3 rounded-full shadow-md group-hover:bg-primary-50 transition-colors">
                                        <Play className="w-5 h-5 fill-primary-600 text-primary-600" />
                                    </div>
                                    <span>Watch Demo</span>
                                </button>
                            </div>

                            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
                                <div className="flex items-center space-x-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <img
                                                key={i}
                                                className="w-10 h-10 rounded-full border-2 border-white"
                                                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                                alt="User"
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <div className="flex text-yellow-400">
                                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        </div>
                                        <span className="text-xs font-bold text-slate-500">24k+ Positive Reviews</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=80"
                                alt="Students learning"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:flex items-center space-x-4 border border-slate-100"
                            >
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <Award className="text-green-600 w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Certificates</p>
                                    <p className="text-slate-900 font-bold">100% Accredited</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:flex items-center space-x-4 border border-slate-100"
                            >
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Users className="text-blue-600 w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Learners</p>
                                    <p className="text-slate-900 font-bold">5M+ Globally</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
