import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] border-t border-white/10 pt-16 pb-8 mt-auto">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2 group">
                            <img
                                src="/AmazeMeals background removed logo.png"
                                alt="AmazeMeals Logo"
                                className="h-10 w-auto group-hover:rotate-12 transition-transform duration-500"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                                AmazeMeals
                            </h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Crafting culinary excellence and serving happiness since 2010. Experience the taste of passion in every bite.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink href="#" icon="facebook" label="Facebook" />
                            <SocialLink href="#" icon="twitter" label="X (Twitter)" />
                            <SocialLink href="#" icon="instagram" label="Instagram" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Menu</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Reservations</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Career</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange">📍</span>
                                <div>
                                    <p className="font-semibold text-gray-200">Headquarters</p>
                                    <p>123 Culinary Avenue,<br />Foodie District, FD 10010</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brand-orange">📞</span>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brand-orange">✉️</span>
                                <span>hello@amazemeals.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe for latest menu updates and exclusive offers.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-[#262626] border border-gray-700 rounded-lg px-4 py-2 w-full text-sm text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange placeholder-gray-600 transition-colors"
                            />
                            <button className="bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-glow">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2026 AmazeMeals Restaurant Group. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon, label }) => {
    // Simple SVG icons for social media
    const icons = {
        facebook: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
        twitter: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
        instagram: <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m0 2a3.8 3.8 0 00-3.8 3.8v8.4A3.8 3.8 0 007.8 20h8.4a3.8 3.8 0 003.8-3.8V7.8A3.8 3.8 0 0016.2 4H7.8z" />
    };

    return (
        <a
            href={href}
            aria-label={label}
            className="w-8 h-8 rounded-full bg-white/10 text-brand-orange flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-110"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {icons[icon]}
            </svg>
        </a>
    );
};

export default Footer;
