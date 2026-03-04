import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
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
                <div className="hidden md:flex md:w-1/2 bg-slate-900 p-12 text-white flex-col justify-between relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-20"></div>

                    <div>
                        <div className="flex items-center space-x-2 mb-8">
                            <div className="bg-primary-600 p-2 rounded-lg">
                                <Lock className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">EduFlow</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-6 leading-tight">Welcome Back to <br /> Your Journey</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Log in to continue your courses, track progress, and connect with fellow learners.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                        <p className="italic text-slate-300 mb-4 text-sm">
                            "The beautiful thing about learning is that nobody can take it away from you."
                        </p>
                        <p className="font-bold text-primary-500">— B.B. King</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Login</h1>
                        <p className="text-slate-500">Welcome back! Please enter your details.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-bold text-slate-700">Password</label>
                                <a href="#!" className="text-xs font-bold text-primary-600 hover:underline">Forgot password?</a>
                            </div>
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
                                id="remember"
                                type="checkbox"
                                className="w-5 h-5 text-primary-600 border-slate-300 rounded focus:ring-primary-500 cursor-pointer"
                                checked={formData.rememberMe}
                                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                            />
                            <label htmlFor="remember" className="ml-3 text-sm font-medium text-slate-600 cursor-pointer">
                                Remember me for 30 days
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-700 hover:shadow-primary-100 transition-all active:scale-[0.98]"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="mt-10 text-center text-slate-600">
                        Don't have an account? <Link to="/register" className="text-primary-600 font-extrabold hover:underline">Register Now</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
