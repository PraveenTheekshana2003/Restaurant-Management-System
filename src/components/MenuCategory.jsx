import React from 'react';
import RatingDisplay from './RatingDisplay';

const MenuCategory = ({ title, items, onAdd }) => {
    return (
        <section className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold border-b-2 border-orange-100 pb-3 mb-8 text-gray-900 flex items-center gap-3">
                <span className="text-brand-orange">
                    {title.includes('Appetizers') && '🥖'}
                    {title.includes('Mains') && '🍝'}
                    {title.includes('Desserts') && '🍰'}
                    {title.includes('Drinks') && '☕'}
                </span>
                {title.replace(/[^a-zA-Z\s]/g, '').trim()}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items.map(item => (
                    <div
                        key={item.id}
                        className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-hover border border-transparent hover:border-orange-100 transition-all duration-300 card-hover flex flex-col h-full"
                    >
                        {/* Food Image with Interaction */}
                        <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-gray-50">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.src = 'https://placehold.co/400x300?text=Delicious+Food';
                                }}
                            />
                            {/* Overlay Button */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button
                                    onClick={() => onAdd(item)}
                                    className="bg-white text-brand-orange font-bold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg"
                                >
                                    Quick Add +
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-xl text-gray-900 group-hover:text-brand-orange transition-colors duration-200">
                                    {item.name}
                                </h3>
                                <span className="text-lg font-bold text-brand-orange bg-orange-50 px-3 py-1 rounded-lg">
                                    ${item.price.toFixed(2)}
                                </span>
                            </div>

                            <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">{item.description}</p>

                            <div className="flex justify-between items-end mt-2 pt-4 border-t border-gray-50">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Rating</span>
                                    <RatingDisplay rating={item.rating} />
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-lg text-lg border border-green-200 shadow-sm">
                                        ${item.price.toFixed(2)}
                                    </span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onAdd(item);
                                        }}
                                        className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg hover:bg-orange-600 hover:scale-110 active:scale-90 transition-all z-20"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuCategory;
