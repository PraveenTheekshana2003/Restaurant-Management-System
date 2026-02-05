import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-brand-orange text-white px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:bg-orange-600 transition-all duration-300 z-50 flex items-center gap-2 font-bold animate-bounce hidden md:flex border border-white/20 hover:scale-105 group"
            aria-label="Back to Top"
        >
            <span className="text-xl">↑</span>
            <span className="uppercase text-sm tracking-wider">Top</span>
        </button>
    );
};

export default BackToTop;
