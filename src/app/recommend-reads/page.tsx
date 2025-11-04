/* eslint-disable react/no-unescaped-entities */
"use client"
import AnimatedButton from '@/components/animated-button';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Silk from '@/components/Silk';
import {TextAnimate} from '@/components/ui/text-animate';

// TypeScript interfaces
interface Book {
    id: string;
    title: string;
    author: string;
    quote: string;
    badge?: string;
    category: string;
}

const books: Book[] = [
    // Entrepreneurship & Business
    {
        id: '1',
        title: 'The Lean Startup',
        author: 'Eric Ries',
        quote: 'Startup success can be engineered by following the right process.',
        badge: 'FUNKASH PICK',
        category: 'entrepreneurship'
    },
    {
        id: '2',
        title: 'Zero to One',
        author: 'Peter Thiel',
        quote: 'Brilliant thinking is rare, but courage is in even shorter supply.',
        category: 'entrepreneurship'
    },
    {
        id: '3',
        title: 'The Hard Thing About Hard Things',
        author: 'Ben Horowitz',
        quote: 'There are no silver bullets for this, only lead bullets.',
        category: 'entrepreneurship'
    },
    // Leadership & Management
    {
        id: '4',
        title: 'High Output Management',
        author: 'Andy Grove',
        quote: 'Let chaos reign, then rein in chaos.',
        category: 'leadership'
    },
    {
        id: '5',
        title: 'Good to Great',
        author: 'Jim Collins',
        quote: 'Greatness is not a function of circumstance. Greatness is a matter of conscious choice.',
        badge: 'FUNKASH PICK',
        category: 'leadership'
    },
    {
        id: '6',
        title: 'The Five Dysfunctions of a Team',
        author: 'Patrick Lencioni',
        quote: 'Teamwork begins by building trust.',
        category: 'leadership'
    },
    // Mindset & Self-Discipline
    {
        id: '7',
        title: 'Atomic Habits',
        author: 'James Clear',
        quote: 'You do not rise to the level of your goals. You fall to the level of your systems.',
        category: 'mindset'
    },
    {
        id: '8',
        title: "Can't Hurt Me",
        author: 'David Goggins',
        quote: 'You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.',
        category: 'mindset'
    },
    {
        id: '9',
        title: 'Deep Work',
        author: 'Cal Newport',
        quote: 'Clarity about what matters provides clarity about what does not.',
        category: 'mindset'
    },
    // Psychology & Thinking
    {
        id: '10',
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        quote: 'Nothing in life is as important as you think it is while you are thinking about it.',
        category: 'psychology'
    },
    {
        id: '11',
        title: 'Influence',
        author: 'Robert Cialdini',
        quote: 'The way to love anything is to realize that it might be lost.',
        category: 'psychology'
    },
    {
        id: '12',
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        quote: 'Doing well with money has little to do with how smart you are and a lot to do with how you behave.',
        badge: 'FUNKASH PICK',
        category: 'psychology'
    }
];

const categories = [
    { id: 'all', name: 'All Books', color: 'purple' },
    { id: 'entrepreneurship', name: 'Entrepreneurship & Business', color: 'blue' },
    { id: 'leadership', name: 'Leadership & Management', color: 'orange' },
    { id: 'mindset', name: 'Mindset & Self-Discipline', color: 'purple' },
    { id: 'psychology', name: 'Psychology & Thinking', color: 'green' }
];

const BookCard: React.FC<{ book: Book; index: number }> = ({ book, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 100);
        return () => clearTimeout(timer);
    }, [index]);

    return (

        <div
            className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-md transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isHovered ? 'border-purple-500 shadow-2xl shadow-purple-500/20 scale-105' : 'border-gray-00'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transitionDelay: isVisible ? '0ms' : `${index * 50}ms` }}
        >
            {/* Badge */}
            {book.badge && (
                <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white text-xs font-semibold tracking-wide">
                    {book.badge}
                </div>
            )}

            {/* Book Icon/Placeholder */}
            <div className="w-16 h-16 mb-6 rounded-xl bg-[#2483bc]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>

            {/* Title */}
            <h3 className={`text-2xl lg:text-3xl font-semibold mb-3 transition-colors duration-300 ${isHovered ? 'text-purple-400' : 'text-white'
                }`}>
                {book.title}
            </h3>

            {/* Author */}
            <p className="text-gray-400 mb-6 text-sm">by {book.author}</p>

            {/* Quote */}
            <div className="border-l-4 border-[#222946]] pl-4 mb-6">
                <p className="text-gray-300 italic text-base leading-relaxed">"{book.quote}"</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span className="text-sm">Share</span>
                </button>
                <button className="px-4 py-3  bg-[#222946] text-white rounded-xl transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </button>
            </div>
        </div>


    );
};

const RecommendedReadsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredBooks = activeCategory === 'all'
        ? books
        : books.filter(book => book.category === activeCategory);

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
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-base lg:text-lg font-light text-purple-200">
                              <TextAnimate animation="blurIn" as="span"> ✦  Knowledge Library</TextAnimate>  
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-8 leading-tight">
                             <TextAnimate animation="blurIn" as="h2">Recommended Reads</TextAnimate>  
                        </h1>

                        <p className="text-xl lg:text-2xl xl:text-3xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto mb-12">
                            <TextAnimate animation="blurIn" as="p">Books that have shaped our venture philosophy and inspired the Funkash approach to engineering the future.</TextAnimate>   
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-12 mb-8">
                            <div>
                                <div className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                                    {books.length}
                                </div>
                                <div className="text-gray-400 text-sm">Books</div>
                            </div>
                            <div>
                                <div className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                                    4
                                </div>
                                <div className="text-gray-400 text-sm">Categories</div>
                            </div>
                        </div>

                        {/* Decorative Line */}
                        <div className="flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
                        </div>
                    </div>
                </section>

                {/* CATEGORY FILTER */}
                <section className="py-8 px-6 lg:px-12 sticky top-0 z-30 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <AnimatedButton
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === category.id
                                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white '
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                        }`}
                                >
                                    {category.name}
                                </AnimatedButton>
                            ))}
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
                                <h3 className="text-2xl font-semibold text-gray-400 mb-2">No books in this category yet</h3>
                                <p className="text-gray-500">Check back soon for more recommendations!</p>
                            </div>
                        ) : (
                            <>
                                {/* Section Header */}
                                <div className="mb-12">
                                    <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-2">
                                        {categories.find(c => c.id === activeCategory)?.name || 'All Books'}
                                    </h2>
                                    <p className="text-gray-400">
                                        {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} in this collection
                                    </p>
                                </div>

                                {/* Animated Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredBooks.map((book, index) => (
                                        <BookCard key={book.id} book={book} index={index} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h3 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                            Have a book recommendation?
                        </h3>
                        <p className="text-xl text-gray-300 mb-8">
                            Share books that have shaped your thinking and we might add them to our list.
                        </p>
                        <AnimatedButton className="group px-10 py-5  !text-gray-900 font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                            <span>Submit a Book</span>
                            <svg className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </AnimatedButton>
                    </div>
                </section>


            </div>
            <Footer />
        </div>
    );
};

export default RecommendedReadsPage;