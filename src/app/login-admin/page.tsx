/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';

// ==================== TYPE DEFINITIONS ====================
// interface Project {
//   id: string;
//   title: string;
//   client: string;
//   description: string;
//   services: string[];
//   image: string;
//   techStack: string[];
//   link: string;
// }

// interface Essay {
//   id: string;
//   title: string;
//   excerpt: string;
//   content: string;
//   author: string;
//   readTime: number;
//   publishedDate: string;
//   tags: string[];
//   category: string;
//   published: boolean;
// }

// ==================== LOGIN PAGE ====================
const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add authentication logic here
        onLogin();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-blue-950 flex items-center justify-center p-6">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-md">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-md flex items-center justify-center mx-auto overflow-hidden">
                        <img
                            src="/logo.png"
                            alt="Funkash Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
                    <p className="text-gray-400">Sign in to manage your content</p>
                </div>

                {/* Login Form */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                                placeholder="admin@funkash.com"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500" />
                                Remember me
                            </label>
                            <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center text-gray-400 text-sm mt-6">
                    © 2025 Funkash Technology. All rights reserved.
                </p>
            </div>
        </div>
    );
};
export default LoginPage;