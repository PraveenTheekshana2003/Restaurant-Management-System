import React from 'react';

const MenuCategory = ({ title, items, onAdd }) => {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold border-b-2 border-orange-500 pb-2 mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition">
                        <div>
                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-orange-600 font-mono">${item.price.toFixed(2)}</p>
                        </div>
                        <button
                            onClick={() => onAdd(item)}
                            className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition-colors"
                        >
                            + Add
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuCategory;