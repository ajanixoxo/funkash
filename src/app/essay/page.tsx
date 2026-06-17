/* eslint-disable react/no-unescaped-entities */
"use client"
import axios from 'axios';
import { useEffect } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Silk from '@/components/Silk';
import { TextAnimate } from '@/components/ui/text-animate';

// TypeScript interfaces
interface Essay {
    _id: string
    title: string
    excerpt: string
    author: string
    category: string
    readTime: number
    tags: string[]
    published: boolean
    coverImage?: string
    createdAt: string
}



const BookCard: React.FC<{ essay: Essay; index: number }> = ({ essay, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 100);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`group relative flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl border transition-all duration-500 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isHovered ? 'border-purple-500 shadow-xl shadow-purple-500/10 -translate-y-1' : 'border-gray-200 dark:border-gray-800'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transitionDelay: isVisible ? '0ms' : `${index * 50}ms` }}
        >
            <a href={`/essay/${essay._id}`} className="block flex-1 flex flex-col relative z-0">
                {/* Cover Image Area */}
                <div className="w-full h-48 sm:h-56 bg-gray-100 dark:bg-gray-800 relative overflow-hidden shrink-0">
                    {essay.coverImage ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={essay.coverImage} alt={essay.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-indigo-900/40 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                           <span className="text-5xl opacity-30">📝</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                    {/* Meta Info Top */}
                    <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                        <span>{essay.category}</span>
                        <div className="w-1 h-1 rounded-full bg-current opacity-50" />
                        <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {essay.readTime} min read
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 tracking-tight leading-snug transition-colors duration-300 line-clamp-2 ${isHovered ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'}`}>
                        {essay.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 mb-6 flex-1">
                        {essay.excerpt}
                    </p>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                                {essay.author.charAt(0)}
                            </div>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1">{essay.author}</span>
                        </div>
                        <div className="text-xs text-gray-400 font-medium">
                            {new Date(essay.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </div>
                    </div>
                </div>
            </a>
            
            {/* Bookmark button floating action */}
            <button 
                type="button"
                className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 z-10 ${isBookmarked ? 'bg-purple-600 border-purple-500 text-white opacity-100' : 'bg-white/10 hover:bg-white/20 border-white/20 text-white opacity-0 group-hover:opacity-100'}`}
                onClick={(e) => {
                    e.preventDefault();
                    setIsBookmarked(!isBookmarked);
                }}
                aria-label="Bookmark post"
            >
                <svg className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
            </button>
        </div>
    );
};

const EssayPage: React.FC = () => {

    const [essays, setEssays] = useState<Essay[]>([])
    const [loading, setLoading] = useState(true)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    useEffect(() => {
        const fetchEssays = async () => {
            try {
                const response = await axios.get("/api/essays/public")
                // Public API already returns only published essays
                setEssays(response.data)
            } catch (error) {
                console.error("Error fetching essays:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchEssays()
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const categories = Array.from(new Set(essays.map((e) => e.category)))
    const filteredEssays = selectedCategory ? essays.filter((e) => e.category === selectedCategory) : essays

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


                        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-8 leading-tight">
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
                        {loading ? (
                            <div className="flex items-center justify-center h-64">
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin mx-auto mb-4" />
                                    <p className="text-gray-600 dark:text-gray-400">Loading essays...</p>
                                </div>
                            </div>) : filteredEssays.length === 0 ? (
                                <div className="text-center py-20">
                                    <div className="text-6xl mb-4">📚</div>
                                    <h3 className="text-2xl font-semibold text-gray-400 mb-2">No Essay</h3>

                                </div>
                            ) : (
                            <>


                                {/* Animated Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredEssays.map((essay, index) => (
                                        <BookCard key={essay._id} essay={essay} index={index} />
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