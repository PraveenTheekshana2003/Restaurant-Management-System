import React from 'react';

const ReportsDashboard = ({ completedOrders }) => {
    // Calculate total sales
    const totalSales = completedOrders.reduce((sum, order) => sum + order.total, 0);
    const totalOrders = completedOrders.length;
    const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

    // Calculate popular items
    const itemFrequency = {};
    const itemRevenue = {};

    completedOrders.forEach(order => {
        order.items.forEach(item => {
            // Count frequency
            itemFrequency[item.name] = (itemFrequency[item.name] || 0) + 1;

            // Calculate revenue
            const itemPrice = item.price + (item.customizations?.addOns?.reduce((sum, a) => sum + a.price, 0) || 0);
            itemRevenue[item.name] = (itemRevenue[item.name] || 0) + itemPrice;
        });
    });

    // Get top 5 popular items by frequency
    const popularItems = Object.entries(itemFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => ({
            name,
            count,
            revenue: itemRevenue[name] || 0,
        }));

    // Calculate category-wise sales
    const categorySales = {};
    completedOrders.forEach(order => {
        order.items.forEach(item => {
            const category = item.category || 'Other';
            const itemPrice = item.price + (item.customizations?.addOns?.reduce((sum, a) => sum + a.price, 0) || 0);
            categorySales[category] = (categorySales[category] || 0) + itemPrice;
        });
    });

    // Get today's date
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white p-6 rounded-xl shadow-theme-lg">
                <h2 className="text-3xl font-bold mb-2">📊 Sales Reports & Analytics</h2>
                <p className="text-purple-100">{today}</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-theme-primary p-6 rounded-xl shadow-theme-lg border-l-4 border-green-500">
                    <div className="text-green-600 text-4xl mb-2">💰</div>
                    <h3 className="text-theme-secondary text-sm font-semibold mb-1">Total Sales</h3>
                    <p className="text-3xl font-bold text-theme-primary">${totalSales.toFixed(2)}</p>
                </div>

                <div className="bg-theme-primary p-6 rounded-xl shadow-theme-lg border-l-4 border-blue-500">
                    <div className="text-blue-600 text-4xl mb-2">📦</div>
                    <h3 className="text-theme-secondary text-sm font-semibold mb-1">Total Orders</h3>
                    <p className="text-3xl font-bold text-theme-primary">{totalOrders}</p>
                </div>

                <div className="bg-theme-primary p-6 rounded-xl shadow-theme-lg border-l-4 border-brand-orange">
                    <div className="text-brand-orange text-4xl mb-2">📈</div>
                    <h3 className="text-theme-secondary text-sm font-semibold mb-1">Avg. Order Value</h3>
                    <p className="text-3xl font-bold text-theme-primary">${averageOrderValue.toFixed(2)}</p>
                </div>
            </div>

            {/* Popular Items */}
            <div className="bg-theme-primary p-6 rounded-xl shadow-theme-lg">
                <h3 className="text-2xl font-bold text-theme-primary mb-4 flex items-center gap-2">
                    🌟 Top 5 Popular Items
                </h3>
                {popularItems.length === 0 ? (
                    <p className="text-theme-secondary text-center py-8">No data available yet</p>
                ) : (
                    <div className="space-y-3">
                        {popularItems.map((item, index) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-orange from-opacity-10 to-transparent rounded-lg border border-theme"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`text-2xl font-bold ${index === 0 ? 'text-yellow-500' :
                                            index === 1 ? 'text-gray-400 dark:text-gray-500' :
                                                index === 2 ? 'text-orange-600' :
                                                    'text-theme-secondary'
                                        }`}>
                                        #{index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-theme-primary">{item.name}</h4>
                                        <p className="text-sm text-theme-secondary">
                                            Sold {item.count} time{item.count !== 1 ? 's' : ''}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-bold text-green-600 dark:text-green-400">
                                        ${item.revenue.toFixed(2)}
                                    </div>
                                    <div className="text-xs text-theme-tertiary">Revenue</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Category Breakdown */}
            <div className="bg-theme-primary p-6 rounded-xl shadow-theme-lg">
                <h3 className="text-2xl font-bold text-theme-primary mb-4 flex items-center gap-2">
                    📊 Category-wise Sales
                </h3>
                {Object.keys(categorySales).length === 0 ? (
                    <p className="text-theme-secondary text-center py-8">No data available yet</p>
                ) : (
                    <div className="space-y-3">
                        {Object.entries(categorySales)
                            .sort((a, b) => b[1] - a[1])
                            .map(([category, amount]) => {
                                const percentage = totalSales > 0 ? (amount / totalSales) * 100 : 0;
                                return (
                                    <div key={category} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-theme-primary">{category}</span>
                                            <span className="text-theme-primary font-bold">
                                                ${amount.toFixed(2)} ({percentage.toFixed(1)}%)
                                            </span>
                                        </div>
                                        <div className="w-full bg-theme-tertiary rounded-full h-3">
                                            <div
                                                className="bg-gradient-to-r from-brand-red to-brand-orange h-3 rounded-full transition-all"
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                )}
            </div>

            {/* Recent Orders */}
            <div className="bg-theme-primary p-6 rounded-xl shadow-theme-lg">
                <h3 className="text-2xl font-bold text-theme-primary mb-4 flex items-center gap-2">
                    📋 Recent Completed Orders
                </h3>
                {completedOrders.length === 0 ? (
                    <p className="text-theme-secondary text-center py-8">No completed orders yet</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-theme">
                                    <th className="text-left py-3 px-4 font-bold text-theme-primary">Order ID</th>
                                    <th className="text-left py-3 px-4 font-bold text-theme-primary">Table/Delivery</th>
                                    <th className="text-left py-3 px-4 font-bold text-theme-primary">Customer</th>
                                    <th className="text-left py-3 px-4 font-bold text-theme-primary">Items</th>
                                    <th className="text-right py-3 px-4 font-bold text-theme-primary">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {completedOrders.slice(-10).reverse().map((order) => (
                                    <tr key={order.id} className="border-b border-theme hover:bg-theme-tertiary">
                                        <td className="py-3 px-4 text-sm text-theme-secondary">
                                            #{order.id.toString().slice(-6)}
                                        </td>
                                        <td className="py-3 px-4 font-semibold text-theme-primary">
                                            {order.tableNumber}
                                            {order.orderType === 'delivery' && (
                                                <span className="ml-2 text-xs bg-brand-orange text-white px-2 py-1 rounded">
                                                    🚚
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-3 px-4 text-theme-primary">{order.customerName}</td>
                                        <td className="py-3 px-4 text-sm text-theme-secondary">
                                            {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                                        </td>
                                        <td className="py-3 px-4 text-right font-bold text-green-600 dark:text-green-400">
                                            ${order.total.toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReportsDashboard;
