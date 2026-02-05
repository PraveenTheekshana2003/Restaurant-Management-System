import React, { useState } from 'react';
import { customizationOptions } from '../data/menuData';

const ItemCustomizationModal = ({ item, onClose, onAdd }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [specialInstructions, setSpecialInstructions] = useState('');

    // Filter add-ons based on item's allowed add-ons
    const availableAddOns = item.allowedAddOns
        ? item.allowedAddOns.map(key => customizationOptions.addOns[key]).filter(Boolean)
        : [];

    const handleAddOnToggle = (addOn) => {
        if (selectedAddOns.find(a => a.id === addOn.id)) {
            setSelectedAddOns(selectedAddOns.filter(a => a.id !== addOn.id));
        } else {
            setSelectedAddOns([...selectedAddOns, addOn]);
        }
    };

    const calculateTotal = () => {
        const addOnsTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
        return (item.price + addOnsTotal) * quantity;
    };

    const handleAdd = () => {
        onAdd(item, {
            quantity,
            addOns: selectedAddOns,
            specialInstructions,
        });
    };

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-[#1A1A1A] rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row border border-white/10 relative">
                {/* Close Button - Floating */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-brand-red text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                >
                    ✕
                </button>

                {/* Left Side: Image */}
                <div className="md:w-2/5 relative h-64 md:h-auto bg-black">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                        <h2 className="text-3xl font-bold text-white mb-2 leading-tight">{item.name}</h2>
                        <p className="text-gray-300 text-sm line-clamp-3">{item.description}</p>
                    </div>
                </div>

                {/* Right Side: Controls */}
                <div className="md:w-3/5 p-6 md:p-8 overflow-y-auto bg-[#1A1A1A] text-gray-200 custom-scrollbar">

                    {/* Price Tag */}
                    <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                        <span className="text-gray-400 font-medium tracking-wide">Base Price</span>
                        <span className="text-2xl font-bold text-brand-orange">${item.price.toFixed(2)}</span>
                    </div>

                    <div className="space-y-8">
                        {/* Quantity */}
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                                Quantity
                            </label>
                            <div className="flex items-center gap-4 bg-[#262626] rounded-xl p-2 inline-flex border border-gray-800">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 hover:bg-white/10 text-white rounded-lg font-bold text-xl transition-colors"
                                >
                                    −
                                </button>
                                <span className="text-xl font-bold text-white w-12 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 bg-brand-red hover:bg-brand-red-dark text-white rounded-lg font-bold text-xl transition-colors shadow-lg"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add-ons */}
                        {availableAddOns.length > 0 && (
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                                    Customize Your Meal
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {availableAddOns.map((addOn) => {
                                        const isSelected = selectedAddOns.find(a => a.id === addOn.id);
                                        return (
                                            <button
                                                key={addOn.id}
                                                onClick={() => handleAddOnToggle(addOn)}
                                                className={`p-4 rounded-xl border transition-all text-left group relative overflow-hidden ${isSelected
                                                    ? 'border-brand-orange bg-brand-orange/10'
                                                    : 'border-gray-800 bg-[#262626] hover:border-gray-600'
                                                    }`}
                                            >
                                                <div className={`absolute inset-0 bg-brand-orange/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${isSelected ? 'translate-y-0' : ''}`}></div>
                                                <div className="flex items-center justify-between relative z-10">
                                                    <span className={`font-semibold text-sm ${isSelected ? 'text-brand-orange' : 'text-gray-200'}`}>{addOn.name}</span>
                                                    <span className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded">
                                                        {addOn.price > 0 ? `+$${addOn.price.toFixed(2)}` : 'Free'}
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Special Instructions */}
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                                Special Requests
                            </label>
                            <textarea
                                value={specialInstructions}
                                onChange={(e) => setSpecialInstructions(e.target.value)}
                                placeholder="Allergies? Extra napkin? Let us know..."
                                className="w-full px-4 py-3 border border-gray-800 rounded-xl bg-[#262626] text-white placeholder-gray-600 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none resize-none transition-all"
                                rows="3"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar (Mobile/Desktop unified) */}
                <div className="p-6 bg-[#262626] border-t border-gray-800 md:w-3/5 md:absolute md:bottom-0 md:right-0">
                    <button
                        onClick={handleAdd}
                        className="w-full bg-gradient-to-r from-brand-red to-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:from-brand-red-dark hover:to-brand-orange-vibrant transition-all shadow-glow transform active:scale-95 flex items-center justify-between px-8"
                    >
                        <span>Add to Order</span>
                        <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">
                            ${calculateTotal().toFixed(2)}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCustomizationModal;
