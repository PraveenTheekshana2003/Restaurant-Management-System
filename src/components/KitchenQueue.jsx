import React from 'react';

const KitchenQueue = ({ orders, onUpdateStatus }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700';
            case 'preparing':
                return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700';
            case 'ready':
                return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700';
            default:
                return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'pending':
                return '⏳';
            case 'preparing':
                return '👨‍🍳';
            case 'ready':
                return '✅';
            default:
                return '📋';
        }
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    const getTimeSince = (timestamp) => {
        const now = new Date();
        const orderTime = new Date(timestamp);
        const diffMs = now - orderTime;
        const diffMins = Math.floor(diffMs / 60000);

        if (diffMins < 1) return 'Just now';
        if (diffMins === 1) return '1 min ago';
        return `${diffMins} mins ago`;
    };

    if (orders.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="text-8xl mb-4">👨‍🍳</div>
                <h2 className="text-3xl font-semibold text-theme-secondary">No Active Orders</h2>
                <p className="text-theme-tertiary mt-2">Orders will appear here when sent from the menu</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="bg-theme-primary p-4 rounded-xl shadow-theme-md">
                <h2 className="text-2xl font-bold text-theme-primary">
                    Kitchen Display System
                    <span className="ml-3 text-sm font-normal text-theme-secondary">
                        {orders.length} active order{orders.length !== 1 ? 's' : ''}
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-theme-primary rounded-xl shadow-theme-lg border-2 border-theme overflow-hidden hover:shadow-theme-lg transition-shadow"
                    >
                        {/* Order Header */}
                        <div className={`p-4 border-b-4 ${getStatusColor(order.status)}`}>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-bold">{order.tableNumber}</h3>
                                        {order.orderType === 'delivery' && (
                                            <span className="bg-brand-orange text-white text-xs px-2 py-1 rounded-full">
                                                🚚 DELIVERY
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm opacity-75">{order.customerName}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl">{getStatusIcon(order.status)}</div>
                                    <div className="text-xs mt-1 opacity-75">{getTimeSince(order.timestamp)}</div>
                                </div>
                            </div>
                            <div className="text-xs opacity-75">
                                Order #{order.id.toString().slice(-6)} • {formatTime(order.timestamp)}
                            </div>
                        </div>

                        {/* Delivery Details (if delivery order) */}
                        {order.orderType === 'delivery' && order.deliveryDetails && (
                            <div className="p-4 bg-brand-orange bg-opacity-10 border-b border-theme">
                                <div className="text-xs space-y-1">
                                    <div className="font-semibold text-theme-primary">📍 {order.deliveryDetails.address}</div>
                                    <div className="text-theme-secondary">📞 {order.deliveryDetails.phone}</div>
                                    {order.deliveryDetails.instructions && (
                                        <div className="text-brand-orange italic">💬 {order.deliveryDetails.instructions}</div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Order Items */}
                        <div className="p-4 max-h-64 overflow-y-auto">
                            <div className="space-y-3">
                                {order.items.map((item, index) => (
                                    <div key={index} className="bg-theme-tertiary p-3 rounded-lg">
                                        <div className="font-semibold text-theme-primary">{item.name}</div>
                                        {item.customizations?.addOns && item.customizations.addOns.length > 0 && (
                                            <div className="text-xs text-brand-orange mt-1">
                                                + {item.customizations.addOns.map(a => a.name).join(', ')}
                                            </div>
                                        )}
                                        {item.customizations?.specialInstructions && (
                                            <div className="text-xs text-red-600 dark:text-red-400 mt-1 font-semibold">
                                                ⚠️ {item.customizations.specialInstructions}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Total */}
                        <div className="p-4 bg-theme-tertiary border-t border-theme">
                            <div className="flex justify-between text-sm text-theme-secondary mb-1">
                                <span>Total Amount</span>
                                <span className="font-bold text-lg text-theme-primary">${order.total.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Status Actions */}
                        <div className="p-4 bg-theme-secondary border-t-2 border-theme">
                            <div className="space-y-2">
                                {order.status === 'pending' && (
                                    <button
                                        onClick={() => onUpdateStatus(order.id, 'preparing')}
                                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                                    >
                                        Start Preparing
                                    </button>
                                )}
                                {order.status === 'preparing' && (
                                    <button
                                        onClick={() => onUpdateStatus(order.id, 'ready')}
                                        className="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition"
                                    >
                                        Mark as Ready
                                    </button>
                                )}
                                {order.status === 'ready' && (
                                    <button
                                        onClick={() => onUpdateStatus(order.id, 'served')}
                                        className="w-full bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-700 transition"
                                    >
                                        {order.orderType === 'delivery' ? 'Mark as Delivered' : 'Mark as Served'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KitchenQueue;
