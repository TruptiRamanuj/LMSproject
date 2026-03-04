import React from 'react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';

const courses = [
    {
        id: 1,
        title: "Full-Stack Web Development with React",
        instructor: "Sarah Johnson",
        price: "$49.99",
        rating: 4.8,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
        category: "Development",
        level: "Beginner"
    },
    {
        id: 2,
        title: "Advanced Data Science and ML",
        instructor: "Dr. Michael Chen",
        price: "$89.99",
        rating: 4.9,
        reviews: 850,
        image: "https://images.unsplash.com/photo-1551288049-bbda38a5f971?w=800&auto=format&fit=crop&q=60",
        category: "Data Science",
        level: "Advanced"
    },
    {
        id: 3,
        title: "UI/UX Design Masterclass",
        instructor: "Emily Rodriguez",
        price: "$59.99",
        rating: 4.7,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=800&auto=format&fit=crop&q=60",
        category: "Design",
        level: "Intermediate"
    },
    {
        id: 4,
        title: "Digital Marketing Strategy 2024",
        instructor: "James Wilson",
        price: "$39.99",
        rating: 4.6,
        reviews: 3400,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
        category: "Marketing",
        level: "Beginner"
    },
    {
        id: 5,
        title: "Python for Data Analysis",
        instructor: "David Miller",
        price: "$44.99",
        rating: 4.8,
        reviews: 1540,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
        category: "Programming",
        level: "All Levels"
    },
    {
        id: 6,
        title: "Business Leadership Excellence",
        instructor: "Robert K.",
        price: "$74.99",
        rating: 4.9,
        reviews: 620,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60",
        category: "Business",
        level: "Expert"
    }
];

const Home = () => {
    return (
        <div className="pt-16">
            <Hero />

            <section id="courses" className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                            >
                                Explore Top <span className="text-primary-600">Courses</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-slate-600 max-w-2xl"
                            >
                                Choose from over 2,000 online video courses with new additions published every month.
                            </motion.p>
                        </div>
                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-6 md:mt-0 text-primary-600 font-semibold hover:text-primary-700 underline underline-offset-4"
                        >
                            View all courses
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <CourseCard key={course.id} course={course} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary-900 rounded-3xl p-12 text-white relative overflow-hidden"
                    >
                        {/* Abstract Background Shapes */}
                        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
                        <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-64 h-64 bg-primary-400 rounded-full blur-3xl opacity-20"></div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Start your learning journey today</h2>
                        <p className="text-primary-100 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
                            Join over 5 million learners around the globe and master the skills that will build your future.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
                            <button className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all text-lg shadow-xl hover:scale-105">
                                Join Now for Free
                            </button>
                            <button className="border border-primary-400 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-lg">
                                View Business Plans
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Home;
