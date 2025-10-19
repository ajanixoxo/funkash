"use client"
import Silk from '@/components/Silk';
import React, { useState } from 'react';

// TypeScript interface
interface EssayDetail {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  publishedDate: string;
  readTime: number;
  tags: string[];
  featuredQuote: string;
  content: string[];
}

// Sample essay data
const essayData: EssayDetail = {
  id: 'how-to-think-for-yourself',
  title: 'How to Think for Yourself',
  subtitle: 'The Art of Independent Thought in Innovation',
  author: 'Funkash Editorial',
  publishedDate: 'November 11, 2024',
  readTime: 8,
  tags: ['Innovation', 'Critical Thinking', 'Entrepreneurship', 'Philosophy'],
  featuredQuote: 'The most important discoveries often begin in the corners, not the center. At the edges of convention, where curiosity whispers, "What if...?"',
  content: [
    "There's a kind of work that demands more than just correctness — it demands original thought. In science, in startups, in investing, and even in essay writing, being right isn't enough. You have to be right in a way no one else has seen yet.",
    "If you publish what everyone already knows, you're simply echoing the crowd. If you invest where everyone already believes, you're late. If you build a startup on ideas everyone already agrees with, you're entering a crowded field. And if your essays only confirm the reader's current beliefs — they'll close the tab.",
    "Originality isn't optional in these arenas. It's the price of admission.",
    "But this is not true for all work. Most professions value reliability over rebellion. In operations, administration, or logistics — precision, process, and consistency matter far more than reinventing the wheel. Society runs on people who can execute well, not just imagine differently.",
    "The challenge is knowing which game you're playing. Are you in a field where conformity is strength, or one where it's death? The answer determines whether thinking for yourself is a luxury or a necessity.",
    "In innovation-driven domains, independent thinking isn't just valued — it's the only sustainable edge. The moment you start optimizing for consensus, you've already lost. Because consensus, by definition, is what everyone else already knows.",
    "Learning to think for yourself is like learning to see in the dark. At first, everything is uncertain. You fumble. You question whether you're even going in the right direction. But over time, your eyes adjust. You start to notice patterns others miss. You see opportunities where others see obstacles.",
    "The real insight isn't in having better answers. It's in asking better questions. Questions that haven't been asked yet. Questions that make people uncomfortable because they challenge assumptions so deeply embedded, they've become invisible.",
    "This is where breakthroughs happen — not in the center of the conversation, but at the edges. Not in the loudest voices, but in the whispers of 'what if?'",
    "So how do you cultivate this? How do you learn to think for yourself in a world designed to make you think like everyone else?",
    "First, you must learn to trust your own judgment, even when it contradicts the crowd. Especially when it contradicts the crowd. Because if you're always in agreement, you're not thinking — you're following.",
    "Second, you must embrace discomfort. Independent thinking feels wrong at first. It feels lonely. It feels risky. That's how you know you're doing it right.",
    "Third, you must be willing to be wrong. Not just occasionally, but frequently. Because the only way to find novel truths is to explore territory where maps don't exist yet. And in unmapped territory, you're going to get lost sometimes.",
    "The paradox is this: the more you think for yourself, the more you realize how much you don't know. But that's not a bug — it's a feature. Because knowing what you don't know is the first step toward discovering what no one else knows yet.",
    "In the end, thinking for yourself isn't about being contrarian for the sake of it. It's not about rejecting all conventional wisdom just to be different. It's about having the courage to follow your curiosity wherever it leads, even if that path diverges from the well-worn trails everyone else is walking.",
    "Because the most important discoveries often begin in the corners, not the center. At the edges of convention, where curiosity whispers, 'What if...?'",
    "And if you're quiet enough, brave enough, and patient enough — you might just hear the answer."
  ]
};

const EssayDetailPage: React.FC = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = essayData.title;

    const shareUrls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      copy: url
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
      setShowShareMenu(false);
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
      setShowShareMenu(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-12 lg:py-16 px-6 lg:px-12">
        <div className='absolute inset-0 bg-black opacity-70 z-0'>
          <Silk
            speed={5}
            scale={1}
            color="#222946"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back Button */}
          <a
            href="/essays"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to Essays</span>
          </a>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{essayData.author}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{essayData.publishedDate}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{essayData.readTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight">
            {essayData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light leading-relaxed mb-8">
            {essayData.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {essayData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          {/* Featured Quote */}
          <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-l-4 border-purple-500 p-8 lg:p-10 rounded-r-3xl mb-16">
            <svg className="absolute top-6 left-6 w-8 h-8 text-purple-500 opacity-50" fill="currentColor" viewBox="0 0 17 11">
              <path d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z" />
            </svg>
            <p className="text-xl lg:text-2xl text-gray-100 dark:text-gray-200 italic leading-relaxed pl-12">
              {essayData.featuredQuote}
            </p>
          </div>

          {/* Essay Content */}
          <div className="space-y-6">
            {essayData.content.map((paragraph, index) => (
              <p key={index} className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="my-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
          </div>

          {/* Share Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-950 rounded-3xl border border-gray-700 dark:border-gray-800">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Enjoyed this essay?</h3>
              <p className="text-gray-400">Share it with your network</p>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share Essay</span>
              </button>

              {/* Share Dropdown */}
              {showShareMenu && (
                <div className="absolute right-0 mt-3 w-56 bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden z-10">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full flex items-center gap-3 px-5 py-4 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    <span className="font-medium">Share on Twitter</span>
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-full flex items-center gap-3 px-5 py-4 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="font-medium">Share on Facebook</span>
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full flex items-center gap-3 px-5 py-4 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="font-medium">Share on LinkedIn</span>
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="w-full flex items-center gap-3 px-5 py-4 text-gray-300 hover:bg-gray-700 transition-colors border-t border-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Copy Link</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <div className="bg-gray-900 text-white py-8 px-6 text-center border-t border-gray-800">
        <p className="text-gray-400">[Your Footer Component Goes Here]</p>
      </div>
    </div>
  );
};

export default EssayDetailPage;