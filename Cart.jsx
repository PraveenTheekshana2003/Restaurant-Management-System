import React from 'react';

const Cart = ({ cartItems, onRemove }) => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const serviceCharge = subtotal * 0.10;
    const total = subtotal + serviceCharge;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl sticky top-6 border border-gray-200">
            <h2 className="text-xl font-bold mb-4 flex items-center">
                🛒 Current Order <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">{cartItems.length}</span>
            </h2>

            <div className="space-y-3 max-h-96 overflow-y-auto mb-4">
                {cartItems.map((item) => (
                    <div key={item.orderId} className="flex justify-between items-center text-sm border-b pb-2">
                        <span>{item.name}</span>
                        <div className="flex items-center space-x-3">
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                            <button onClick={() => onRemove(item.orderId)} className="text-red-500 hover:text-red-700">✕</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Service Charge (10%)</span>
                    <span>${serviceCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg shadow-green-200">
                Send to Kitchen
            </button>
        </div>
    );
};

export default Cart;