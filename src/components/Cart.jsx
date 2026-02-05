import React, { useState } from 'react';
import DeliveryForm from './DeliveryForm';

const Cart = ({ cartItems, onRemove, onSendToKitchen }) => {
    const [tableNumber, setTableNumber] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [appliedDiscount, setAppliedDiscount] = useState(0);
    const [customerName, setCustomerName] = useState('');
    const [orderType, setOrderType] = useState('dine-in'); // 'dine-in' or 'delivery'
    const [deliveryDetails, setDeliveryDetails] = useState({});

    const discountCodes = {
        'SAVE10': 10,
        'SAVE20': 20,
        'WELCOME': 15,
        'VIP': 25,
    };

    const DELIVERY_FEE = 5.00;

    const handleApplyDiscount = () => {
        const discount = discountCodes[discountCode.toUpperCase()];
        if (discount) {
            setAppliedDiscount(discount);
        } else {
            alert('Invalid discount code');
            setAppliedDiscount(0);
        }
    };

    const subtotal = cartItems.reduce((acc, item) => {
        let itemTotal = item.price;
        if (item.customizations?.addOns) {
            itemTotal += item.customizations.addOns.reduce((sum, addon) => sum + addon.price, 0);
        }
        return acc + itemTotal;
    }, 0);

    const discountAmount = (subtotal * appliedDiscount) / 100;
    const afterDiscount = subtotal - discountAmount;
    const serviceCharge = afterDiscount * 0.10;
    const deliveryFee = orderType === 'delivery' ? DELIVERY_FEE : 0;
    const total = afterDiscount + serviceCharge + deliveryFee;

    const handleSendToKitchen = () => {
        if (cartItems.length === 0) {
            alert('Cart is empty!');
            return;
        }

        if (orderType === 'dine-in' && !tableNumber) {
            alert('Please enter table number!');
            return;
        }

        if (orderType === 'delivery' && (!deliveryDetails.address || !deliveryDetails.phone)) {
            alert('Please fill in delivery address and phone number!');
            return;
        }

        onSendToKitchen({
            tableNumber: orderType === 'dine-in' ? tableNumber : 'Delivery',
            customerName: customerName || 'Guest',
            orderType,
            deliveryDetails: orderType === 'delivery' ? deliveryDetails : null,
            subtotal,
            discountAmount,
            serviceCharge,
            deliveryFee,
            total,
        });

        // Reset form
        setTableNumber('');
        setCustomerName('');
        setDiscountCode('');
        setAppliedDiscount(0);
        setOrderType('dine-in');
        setDeliveryDetails({});
    };

    return (
        <div className="bg-[#1A1A1A] rounded-3xl shadow-2xl p-6 border border-white/10 sticky top-24 h-fit animate-fade-in flex flex-col">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-white/10 pb-4">
                <span>🛒</span> Your Order
            </h2>

            {/* Order Type Toggle */}
            <div className="flex bg-[#262626] p-1.5 rounded-xl mb-6 border border-gray-800">
                <button
                    onClick={() => setOrderType('dine-in')}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2
                        ${orderType === 'dine-in'
                            ? 'bg-brand-orange text-white shadow-lg scale-100'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                    `}
                >
                    🍽️ Dine In
                </button>
                <button
                    onClick={() => setOrderType('delivery')}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2
                        ${orderType === 'delivery'
                            ? 'bg-brand-orange text-white shadow-lg scale-100'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                    `}
                >
                    🛵 Delivery
                </button>
            </div>

            {/* Customer Details */}
            <div className="space-y-3 mb-4 pb-4 border-b border-theme">
                {orderType === 'dine-in' ? (
                    <input
                        type="text"
                        placeholder="Table Number *"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        className="w-full px-4 py-2 border-2 border-theme rounded-lg bg-theme-secondary text-theme-primary focus:border-brand-orange focus:outline-none"
                    />
                ) : (
                    <DeliveryForm onUpdate={setDeliveryDetails} />
                )}
                <input
                    type="text"
                    placeholder="Customer Name (Optional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-theme rounded-lg bg-theme-secondary text-theme-primary focus:border-brand-orange focus:outline-none"
                />
            </div>

            {/* Cart Items */}
            <div className="space-y-3 max-h-80 overflow-y-auto mb-4">
                {cartItems.length === 0 ? (
                    <p className="text-center text-theme-secondary py-8">Your cart is empty</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.orderId} className="bg-theme-tertiary p-3 rounded-lg border border-theme">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <span className="font-semibold text-theme-primary">{item.name}</span>
                                    {item.customizations?.addOns && item.customizations.addOns.length > 0 && (
                                        <div className="text-xs text-brand-orange mt-1">
                                            + {item.customizations.addOns.map(a => a.name).join(', ')}
                                        </div>
                                    )}
                                    {item.customizations?.specialInstructions && (
                                        <div className="text-xs text-brand-red mt-1">
                                            Note: {item.customizations.specialInstructions}
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-3 ml-3">
                                    <span className="font-bold text-brand-orange">
                                        ${(item.price + (item.customizations?.addOns?.reduce((sum, a) => sum + a.price, 0) || 0)).toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => onRemove(item.orderId)}
                                        className="text-red-500 hover:text-red-700 font-bold text-lg"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Discount Code */}
            {cartItems.length > 0 && (
                <div className="mb-4 pb-4 border-b border-theme">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Discount Code"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            className="flex-1 px-4 py-2 border-2 border-theme rounded-lg bg-theme-secondary text-theme-primary focus:border-brand-orange focus:outline-none uppercase"
                        />
                        <button
                            onClick={handleApplyDiscount}
                            className="bg-brand-orange bg-opacity-20 text-brand-orange px-4 py-2 rounded-lg font-bold hover:bg-opacity-30 transition"
                        >
                            Apply
                        </button>
                    </div>
                    {appliedDiscount > 0 && (
                        <p className="text-green-600 dark:text-green-400 text-sm mt-2">✓ {appliedDiscount}% discount applied!</p>
                    )}
                    <p className="text-xs text-theme-tertiary mt-2">Try: SAVE10, SAVE20, WELCOME, VIP</p>
                </div>
            )}

            {/* Bill Summary */}
            {cartItems.length > 0 && (
                <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-theme-secondary">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {appliedDiscount > 0 && (
                        <div className="flex justify-between text-green-600 dark:text-green-400">
                            <span>Discount ({appliedDiscount}%)</span>
                            <span>-${discountAmount.toFixed(2)}</span>
                        </div>
                    )}
                    <div className="flex justify-between text-theme-secondary">
                        <span>Service Charge (10%)</span>
                        <span>${serviceCharge.toFixed(2)}</span>
                    </div>
                    {orderType === 'delivery' && (
                        <div className="flex justify-between text-theme-secondary">
                            <span>Delivery Fee</span>
                            <span>${deliveryFee.toFixed(2)}</span>
                        </div>
                    )}
                    <div className="flex justify-between text-2xl font-bold text-theme-primary pt-3 border-t-2 border-theme">
                        <span>Total</span>
                        <span className="text-brand-orange">${total.toFixed(2)}</span>
                    </div>
                </div>
            )}

            {/* Send to Kitchen Button */}
            <button
                onClick={handleSendToKitchen}
                disabled={cartItems.length === 0}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${cartItems.length === 0
                    ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-green-200 dark:shadow-green-900 transform hover:scale-105'
                    }`}
            >
                {orderType === 'delivery' ? '🚚 Place Delivery Order' : '🍳 Send to Kitchen'}
            </button>
        </div>
    );
};

export default Cart;
