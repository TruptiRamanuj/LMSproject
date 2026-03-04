import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        agreeToTerms: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration attempt:', formData);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 pt-24 pb-12">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary-600 -z-0 rounded-b-[3rem] shadow-2xl"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10"
            >
                {/* Left Side - Visual */}
                <div className="hidden md:flex md:w-1/2 bg-primary-900 p-12 text-white flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20"></div>

                    <div>
                        <div className="flex items-center space-x-2 mb-8">
                            <div className="bg-white p-2 rounded-lg">
                                <Lock className="text-primary-900 w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold italic tracking-tight">EduFlow</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-6 leading-tight">Join Millions of <br /> Learners Worldwide</h2>
                        <p className="text-primary-100 text-lg leading-relaxed">
                            Start your journey today and get access to exclusive courses from industry experts.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="bg-primary-800 p-3 rounded-xl">
                                <ArrowRight className="w-5 h-5 text-primary-300" />
                            </div>
                            <div>
                                <p className="font-bold">Lifetime Access</p>
                                <p className="text-sm text-primary-300">Learn at your own pace, anytime.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-primary-800 p-3 rounded-xl">
                                <ArrowRight className="w-5 h-5 text-primary-300" />
                            </div>
                            <div>
                                <p className="font-bold">Expert Instructors</p>
                                <p className="text-sm text-primary-300">Curated content by real professionals.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h1>
                        <p className="text-slate-500">Fast and free registration for all students.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="terms"
                                type="checkbox"
                                className="w-5 h-5 text-primary-600 border-slate-300 rounded focus:ring-primary-500 cursor-pointer"
                                required
                                checked={formData.agreeToTerms}
                                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                            />
                            <label htmlFor="terms" className="ml-3 text-sm text-slate-600">
                                I agree to the <a href="#!" className="text-primary-600 font-bold hover:underline">Terms of Service</a> and <a href="#!" className="text-primary-600 font-bold hover:underline">Privacy Policy</a>.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-700 hover:shadow-primary-100 transition-all active:scale-[0.98]"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-8">
                        <div className="relative flex items-center justify-center mb-6">
                            <div className="border-t border-slate-200 w-full"></div>
                            <span className="bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest absolute">Or register with</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center space-x-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg" className="w-5 h-5" alt="Google" />
                                <span className="font-bold text-slate-700">Google</span>
                            </button>
                            <button className="flex items-center justify-center space-x-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                <Github className="w-5 h-5 text-slate-900" />
                                <span className="font-bold text-slate-700">Github</span>
                            </button>
                        </div>
                    </div>

                    <p className="mt-10 text-center text-slate-600">
                        Already have an account? <Link to="/login" className="text-primary-600 font-extrabold hover:underline">Login</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
