import React, { useState } from 'react';
import MenuCategory from './components/MenuCategory';
import Cart from './components/Cart';
import KitchenQueue from './components/KitchenQueue';
import ReportsDashboard from './components/ReportsDashboard';
import ItemCustomizationModal from './components/ItemCustomizationModal';
import RatingModal from './components/RatingModal';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { menuData } from './data/menuData';

const App = () => {
    const [cart, setCart] = useState([]);
    const [view, setView] = useState('menu'); // 'menu', 'kitchen', 'reports', 'about'
    const [kitchenOrders, setKitchenOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showCustomizationModal, setShowCustomizationModal] = useState(false);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [itemToRate, setItemToRate] = useState(null);
    const [menuItems, setMenuItems] = useState(menuData);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setShowCustomizationModal(true);
    };

    const addToCart = (item, customizations = {}) => {
        const cartItem = {
            ...item,
            orderId: Date.now() + Math.random(),
            customizations,
            addedAt: new Date().toISOString(),
        };
        setCart([...cart, cartItem]);
        setShowCustomizationModal(false);
    };

    const removeFromCart = (orderId) => {
        setCart(cart.filter(item => item.orderId !== orderId));
    };

    const sendToKitchen = (orderDetails) => {
        const order = {
            id: Date.now(),
            items: cart,
            ...orderDetails,
            status: 'pending',
            timestamp: new Date().toISOString(),
        };
        setKitchenOrders([...kitchenOrders, order]);
        setCart([]);
    };

    const updateOrderStatus = (orderId, newStatus) => {
        if (newStatus === 'served') {
            const order = kitchenOrders.find(o => o.id === orderId);
            if (order) {
                setCompletedOrders([...completedOrders, { ...order, status: 'served', completedAt: new Date().toISOString() }]);
                setKitchenOrders(kitchenOrders.filter(o => o.id !== orderId));

                // Show rating modal for first item
                if (order.items.length > 0) {
                    setItemToRate(order.items[0]);
                    setShowRatingModal(true);
                }
            }
        } else {
            setKitchenOrders(kitchenOrders.map(order =>
                order.id === orderId ? { ...order, status: newStatus } : order
            ));
        }
    };

    const handleSubmitRating = (itemId, rating, review) => {
        // Update menu items with new rating
        const updatedMenuItems = { ...menuItems };
        Object.keys(updatedMenuItems).forEach(category => {
            updatedMenuItems[category] = updatedMenuItems[category].map(item => {
                if (item.id === itemId) {
                    const currentRating = item.rating;
                    const newCount = currentRating.count + 1;
                    const newAverage = ((currentRating.average * currentRating.count) + rating) / newCount;
                    return {
                        ...item,
                        rating: {
                            average: newAverage,
                            count: newCount,
                        },
                    };
                }
                return item;
            });
        });
        setMenuItems(updatedMenuItems);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#111] text-white font-sans transition-colors duration-300">
            {/* Navigation - Brand Orange */}
            <nav className="bg-brand-orange sticky top-0 z-40 shadow-lg border-b border-white/10">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('menu')}>
                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all">
                            <img
                                src="/AmazeMeals background removed logo.png"
                                alt="AmazeMeals Logo"
                                className="h-10 w-auto transform group-hover:scale-110 transition-transform"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md font-display">
                            AmazeMeals
                        </h1>
                    </div>
                    <div className="flex items-center gap-1 md:gap-4">
                        <NavButton active={view === 'menu'} onClick={() => setView('menu')} icon="📋">Menu</NavButton>
                        <NavButton active={view === 'kitchen'} onClick={() => setView('kitchen')} icon="👨‍🍳" badge={kitchenOrders.length}>Kitchen</NavButton>
                        <NavButton active={view === 'reports'} onClick={() => setView('reports')} icon="📊">Reports</NavButton>
                        <NavButton active={view === 'about'} onClick={() => setView('about')} icon="ℹ️">About Us</NavButton>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto p-4 md:p-8 flex-grow">
                {view === 'menu' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
                        <div className="lg:col-span-2 space-y-12">
                            <MenuCategory onAdd={handleItemClick} title="🥖 Appetizers" items={menuItems.appetizers} />
                            <MenuCategory onAdd={handleItemClick} title="🍝 Main Courses" items={menuItems.mains} />
                            <MenuCategory onAdd={handleItemClick} title="🍰 Desserts" items={menuItems.desserts} />
                            <MenuCategory onAdd={handleItemClick} title="☕ Drinks" items={menuItems.drinks} />
                        </div>
                        <div className="lg:col-span-1">
                            <Cart cartItems={cart} onRemove={removeFromCart} onSendToKitchen={sendToKitchen} />
                        </div>
                    </div>
                )}

                {view === 'kitchen' && (
                    <div className="animate-fade-in">
                        <KitchenQueue orders={kitchenOrders} onUpdateStatus={updateOrderStatus} />
                    </div>
                )}

                {view === 'reports' && (
                    <div className="animate-fade-in">
                        <ReportsDashboard completedOrders={completedOrders} />
                    </div>
                )}

                {view === 'about' && (
                    <div className="animate-fade-in">
                        <AboutUs />
                    </div>
                )}
            </main>

            {/* Footer - Only show on Home and About */}
            {['menu', 'about'].includes(view) && <Footer />}

            {/* Components */}
            <BackToTop />

            {/* Customization Modal */}
            {showCustomizationModal && selectedItem && (
                <ItemCustomizationModal
                    item={selectedItem}
                    onClose={() => setShowCustomizationModal(false)}
                    onAdd={addToCart}
                />
            )}

            {/* Rating Modal */}
            {showRatingModal && itemToRate && (
                <RatingModal
                    item={itemToRate}
                    onClose={() => setShowRatingModal(false)}
                    onSubmitRating={handleSubmitRating}
                />
            )}
        </div>
    );
};

const NavButton = ({ active, onClick, children, icon, badge }) => (
    <button
        onClick={onClick}
        className={`
            relative px-5 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 text-sm uppercase tracking-wide
            ${active
                ? 'bg-white text-brand-orange shadow-lg transform scale-105'
                : 'text-white/80 hover:bg-white/20 hover:text-white'}
        `}
    >
        <span className="text-lg">{icon}</span>
        <span className="hidden md:inline">{children}</span>
        {badge > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md border border-white">
                {badge}
            </span>
        )}
    </button>
);

export default App;
