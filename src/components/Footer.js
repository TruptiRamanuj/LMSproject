import React from 'react';
import { BookOpen, Twitter, Facebook, Instagram, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2 text-white">
                            <div className="bg-primary-600 p-2 rounded-lg">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold">EduFlow</span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Empowering learners worldwide with affordable, high-quality education. Join our community and start your journey today.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#!" className="hover:text-primary-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#!" className="hover:text-primary-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#!" className="hover:text-primary-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#!" className="hover:text-primary-500 transition-colors"><Github className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/" className="hover:text-primary-500 transition-colors underline-link">Home</Link></li>
                            <li><a href="#courses" className="hover:text-primary-500 transition-colors underline-link">Courses</a></li>
                            <li><Link to="/about" className="hover:text-primary-500 transition-colors underline-link">About Us</Link></li>
                            <li><Link to="/dashboard" className="hover:text-primary-500 transition-colors underline-link">Dashboard</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary-500 transition-colors underline-link">Pricing Plans</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#!" className="hover:text-primary-500 transition-colors">Help Center</a></li>
                            <li><a href="#!" className="hover:text-primary-500 transition-colors">Career Support</a></li>
                            <li><a href="#!" className="hover:text-primary-500 transition-colors">Terms of Service</a></li>
                            <li><a href="#!" className="hover:text-primary-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#!" className="hover:text-primary-500 transition-colors">Affiliate Program</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>123 Learning Street, Tech City, NY 10001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>support@eduflow.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-sm">
                    <p>© {new Date().getFullYear()} EduFlow. All rights reserved. Designed with ❤️ for learners.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
