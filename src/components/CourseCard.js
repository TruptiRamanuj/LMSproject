import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, BookOpen, ChevronRight } from 'lucide-react';

const CourseCard = ({ course, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
        >
            <div className="relative overflow-hidden aspect-video">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                        {course.category}
                    </span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Preview Course
                    </button>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-1 mb-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : 'text-slate-200'}`}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-bold text-slate-500">({course.reviews})</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {course.title}
                </h3>

                <div className="flex items-center mb-6">
                    <img
                        src={`https://i.pravatar.cc/100?u=${course.instructor}`}
                        alt={course.instructor}
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-slate-600 font-medium">{course.instructor}</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-slate-900">{course.price}</span>
                        <span className="text-xs text-slate-400 line-through">$129.99</span>
                    </div>
                    <button className="bg-primary-50 text-primary-600 p-3 rounded-xl group-hover:bg-primary-600 group-hover:text-white transition-all">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
