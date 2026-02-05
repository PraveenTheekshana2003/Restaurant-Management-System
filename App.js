import React, { useState } from 'react';
import MenuCategory from './components/MenuCategory';
import Cart from './components/Cart';

const App = () => {
    const [cart, setCart] = useState([]);
    const [view, setView] = useState('menu'); // 'menu' or 'kitchen'

    const addToCart = (item) => {
        setCart([...cart, { ...item, orderId: Date.now() }]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.orderId !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Navigation */}
            <nav className="bg-orange-600 p-4 text-white shadow-lg flex justify-between items-center">
                <img src="AmazeMeals background removed logo.png"></img>
                <h1 className="text-2xl font-bold tracking-tight">AmazeMeals</h1>
                <div className="space-x-4">
                    <button onClick={() => setView('menu')} className="hover:underline">Menu</button>
                    <button onClick={() => setView('kitchen')} className="hover:underline">Kitchen Queue</button>
                </div>
            </nav>

            <main className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {view === 'menu' ? (
                    <>
                        <div className="lg:col-span-2">
                            <MenuCategory onAdd={addToCart} title="Mains" items={mockData} />
                        </div>
                        <div className="lg:col-span-1">
                            <Cart cartItems={cart} onRemove={removeFromCart} />
                        </div>
                    </>
                ) : (
                    <div className="lg:col-span-3 text-center py-20">
                        <h2 className="text-3xl font-semibold text-gray-400">Kitchen Display System (KDS) Integration Coming Soon...</h2>
                    </div>
                )}
            </main>
        </div>
    );
};

const mockData = [
    { id: 1, name: 'Truffle Pasta', price: 18.50, category: 'Mains' },
    { id: 2, name: 'Margherita Pizza', price: 14.00, category: 'Mains' },
    { id: 3, name: 'Garlic Bread', price: 6.50, category: 'Appetizers' },
];

export default App;