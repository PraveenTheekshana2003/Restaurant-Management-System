import React, { useState } from 'react';
import TeamMemberModal from './TeamMemberModal';

const AboutUs = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    return (
        <div className="space-y-12 pb-12">
            {/* Hero Section */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <img
                    src="/src/assets/restaurant-hero.png"
                    alt="AmazeMeals Restaurant Interior"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                        Our Story
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fade-in">
                        Crafting culinary excellence since 2010. Where passion meets flavor in every dish.
                    </p>
                </div>
            </div>

            {/* Our Journey & Owner */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="h-1 w-12 bg-brand-orange rounded-full"></span>
                        <h2 className="text-brand-red font-bold uppercase tracking-wider text-sm">The Vision</h2>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Founded by Chef Marco Rossi</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        "AmazeMeals started with a simple dream: to bring authentic, high-quality flavors to our community in a modern, welcoming setting. We believe that great food brings people together."
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From our humble beginnings as a small family bistro, we've grown into a beloved dining destination, never compromising on our commitment to fresh ingredients and exceptional service.
                    </p>

                    <div className="grid grid-cols-3 gap-6 pt-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-brand-orange">15+</div>
                            <div className="text-sm text-gray-500">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-brand-orange">3</div>
                            <div className="text-sm text-gray-500">Locations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-brand-orange">50k+</div>
                            <div className="text-sm text-gray-500">Happy Customers</div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-3xl p-8 h-full flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-orange/10 rounded-full -ml-16 -mb-16"></div>

                    <h4 className="text-xl font-bold mb-6 relative z-10">Our Core Values</h4>
                    <ul className="space-y-4 relative z-10">
                        <li className="flex items-start gap-3">
                            <span className="text-2xl mt-1">🌿</span>
                            <div>
                                <h5 className="font-bold text-gray-900">Fresh Ingredients</h5>
                                <p className="text-gray-600">We source locally whenever possible to ensure maximum freshness.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl mt-1">🤝</span>
                            <div>
                                <h5 className="font-bold text-gray-900">Community First</h5>
                                <p className="text-gray-600">We are proud to support local events and charities.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl mt-1">⭐</span>
                            <div>
                                <h5 className="font-bold text-gray-900">Excellence Per Plate</h5>
                                <p className="text-gray-600">Every dish is prepared with meticulous attention to detail.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Team & Quality */}
            <section className="bg-gradient-to-br from-brand-red-light to-white p-8 md:p-12 rounded-3xl">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                    <p className="text-gray-600 text-lg">
                        Behind every delicious meal is a passionate team dedicated to making your experience unforgettable.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Sarah Jenkins",
                            role: "Head Chef",
                            emoji: "👩‍🍳",
                            image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
                            bio: "With over 15 years of culinary experience in Michelin-starred restaurants across Europe, Sarah brings a refined touch to every dish. Her passion lies in blending traditional Italian techniques with modern flavors.",
                            quote: "Cooking is an art, but feeding people is an act of love."
                        },
                        {
                            name: "David Chen",
                            role: "Restaurant Manager",
                            emoji: "👔",
                            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
                            bio: "David ensures that every guest feels like family. His attention to detail and commitment to service excellence have made AmazeMeals a local favorite for hospitality.",
                            quote: "Great service can save a bad meal, but a good meal cannot save bad service."
                        },
                        {
                            name: "Elena Rodriguez",
                            role: "Customer Relations",
                            emoji: "👋",
                            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
                            bio: "Elena is the smiling face that greets you. She manages events, reservations, and ensures that every special occasion is celebrated perfectly.",
                            quote: "Every guest has a story, and we are honored to be part of it."
                        }
                    ].map((member, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedMember(member)}
                            className="bg-white p-0 rounded-2xl shadow-md text-center hover:shadow-2xl transition-all cursor-pointer group overflow-hidden transform hover:-translate-y-2"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-6 relative">
                                <div className="text-4xl absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg z-20">{member.emoji}</div>
                                <h3 className="text-xl font-bold text-gray-900 mt-4 group-hover:text-brand-orange transition-colors">{member.name}</h3>
                                <p className="text-brand-orange font-medium text-sm uppercase tracking-wide">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Modal */}
                {selectedMember && (
                    <TeamMemberModal
                        member={selectedMember}
                        onClose={() => setSelectedMember(null)}
                    />
                )}
            </section>

            {/* Customer Feedback Section */}
            <section className="py-12 bg-orange-50 rounded-3xl my-12">
                <div className="text-center max-w-3xl mx-auto mb-12 px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                    <p className="text-gray-600 text-lg">
                        Don't just take our word for it. Here's what our community loves about AmazeMeals.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 px-8 md:px-12">
                    {[
                        {
                            name: "Emily Thompson",
                            role: "Food Blogger",
                            rating: 5,
                            text: "The Truffle Pasta is absolutely divine! Best Italian cuisine I've had in the city. The atmosphere is perfect for date nights.",
                            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
                        },
                        {
                            name: "Michael Chang",
                            role: "Frequent Diner",
                            rating: 5,
                            text: "I come here every Friday for the Deluxe Burger. The staff knows my order by heart now. Consistent quality and amazing service!",
                            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                        },
                        {
                            name: "Jessica Parker",
                            role: "Local Guide",
                            rating: 4,
                            text: "A hidden gem! The dessert menu is to die for. You haven't lived until you've tried their Chocolate Lava Cake.",
                            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                        }
                    ].map((review, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 text-6xl text-brand-orange/10 font-serif">"</div>

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-orange/20"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-brand-orange">{review.role}</p>
                                </div>
                            </div>

                            <div className="flex text-yellow-400 text-xl mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                                ))}
                            </div>

                            <p className="text-gray-600 italic relative z-10">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Visit Us / Map */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Visit Our Locations</h2>
                        <p className="text-gray-600 mt-2">Find the nearest AmazeMeals branch near you.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-[400px]">
                        <img
                            src="/src/assets/map.png"
                            alt="AmazeMeals Locations Map"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none'; // Fallback if image fails
                            }}
                        />
                    </div>

                    <div className="space-y-4">
                        {[
                            { name: "Downtown Branch", address: "123 Main St, City Center", time: "10:00 AM - 10:00 PM" },
                            { name: "Westside Hub", address: "456 West Ave, Business District", time: "11:00 AM - 11:00 PM" },
                            { name: "Riverside View", address: "789 River Rd, Waterfront", time: "10:00 AM - 11:00 PM" }
                        ].map((loc, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange transition-colors cursor-pointer group">
                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-orange">{loc.name}</h3>
                                <div className="flex items-start gap-2 mt-2 text-gray-600">
                                    <span>📍</span>
                                    <p className="text-sm">{loc.address}</p>
                                </div>
                                <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                                    <span>🕒</span>
                                    <p>{loc.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
