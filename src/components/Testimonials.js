import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Frontend Developer",
        content: "The quality of courses here is unmatched. I've learned more in 3 months than I did in a year of self-study.",
        avatar: "https://i.pravatar.cc/100?img=12"
    },
    {
        name: "Sarah Jenkins",
        role: "Product Designer",
        content: "EduFlow changed my career trajectory. The UI/UX masterclass helped me land my dream job at a top tech firm.",
        avatar: "https://i.pravatar.cc/100?img=45"
    },
    {
        name: "Marcus Thorne",
        role: "Marketing Specialist",
        content: "I love the flexibility. The instructors are experts in their fields and the content is always up-to-date.",
        avatar: "https://i.pravatar.cc/100?img=33"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 underline-offset-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        What Our <span className="text-primary-600">Students Say</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />
                            <p className="text-slate-600 mb-8 italic relative z-10">"{t.content}"</p>
                            <div className="flex items-center">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-primary-50" />
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                                    <p className="text-xs text-primary-600 font-semibold uppercase">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
