/* eslint-disable react/no-unescaped-entities */
"use client"
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Silk from '@/components/Silk';
import { TextAnimate } from '@/components/ui/text-animate';

// TypeScript interfaces
interface Essay {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    readTime: number;
    publishedDate: string;
    tags: string[];
    category: string;
}

const essays: Essay[] = [
    // Entrepreneurship & Business
    {
        id: '1',
        title: 'How to Think for Yourself',
        excerpt: 'The most important discoveries often begin in the corners, not the center, at the edges of conversation, where curiosity outpaces, "What if?"',
        author: 'Paul Graham',
        readTime: 8,
        publishedDate: 'Nov 2020',
        tags: ['Innovation', 'Critical Thinking', 'Entrepreneurship', 'Philosophy'],
        category: 'thinking'
    },
];



const BookCard: React.FC<{ essay: Essay; index: number }> = ({ essay, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 100);
        return () => clearTimeout(timer);
    }, [index]);

    return (

        <div
            className={`group relative bg-white dark:bg-gray-900 rounded-2xl border transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isHovered ? 'border-purple-500 shadow-2xl shadow-purple-500/10 -translate-y-2' : 'border-gray-200 dark:border-gray-800'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transitionDelay: isVisible ? '0ms' : `${index * 50}ms` }}
        >
            <a href={`/essays/${essay.id}`} className="block p-8">
                {/* Quote/Excerpt */}
                <div className="mb-6">
                    <div className="border-l-4 border-purple-500 pl-4">
                        <p className="text-gray-600 dark:text-gray-300 italic text-base leading-relaxed">
                            "{essay.excerpt}"
                        </p>
                    </div>
                </div>

                {/* Title */}
                <h3 className={`text-2xl lg:text-3xl font-bold mb-4 tracking-tight transition-colors duration-300 ${isHovered ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-gray-100'
                    }`}>
                    {essay.title}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{essay.author}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{essay.readTime} min read</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                    <span>{essay.publishedDate}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {essay.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium">
                    <span>Read full essay</span>
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </a>
        </div>


    );
};

const EssayPage: React.FC = () => {


    const filteredBooks = essays

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
                {/* HERO SECTION */}
                <section className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
                    {/* Background Pattern */}
                    <div className='absolute inset-0 bg-black opacity-70 z-0'>
                        <Silk
                            speed={5}
                            scale={1}
                            color="#222946"
                            noiseIntensity={1.5}
                            rotation={0}
                        />
                    </div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">


                        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-tight">
                            <TextAnimate animation="blurIn" as="h2"> Essay</TextAnimate>
                        </h1>

                        <p className="text-xl lg:text-2xl xl:text-3xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto mb-12">
                            <TextAnimate animation="blurIn" as="p"> Curated insights on innovation, entrepreneurship, and building for the future
                                .</TextAnimate>
                        </p>

                     

                        {/* Decorative Line */}
                        <div className="flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
                        </div>
                    </div>
                </section>



                {/* BOOKS SECTION - Animated Grid */}
                <section className="py-16 lg:py-24 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        {/* Empty State */}
                        {filteredBooks.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">📚</div>
                                <h3 className="text-2xl font-bold text-gray-400 mb-2">No Essay</h3>
                               
                            </div>
                        ) : (
                            <>


                                {/* Animated Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredBooks.map((essay, index) => (
                                        <BookCard key={essay.id} essay={essay} index={index} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </section>

               


            </div>
            <Footer />
        </div>
    );
};

export default EssayPage