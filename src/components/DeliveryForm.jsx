import React, { useState } from 'react';

const DeliveryForm = ({ onUpdate }) => {
    const [deliveryDetails, setDeliveryDetails] = useState({
        address: '',
        phone: '',
        instructions: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updated = { ...deliveryDetails, [name]: value };
        setDeliveryDetails(updated);
        onUpdate(updated);
    };

    return (
        <div className="space-y-3 p-4 bg-theme-tertiary rounded-lg border-2 border-brand-orange border-opacity-30">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🚚</span>
                <h3 className="font-bold text-theme-primary">Delivery Details</h3>
            </div>

            <input
                type="text"
                name="address"
                placeholder="Delivery Address *"
                value={deliveryDetails.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-theme rounded-lg bg-theme-primary text-theme-primary focus:border-brand-orange focus:outline-none"
                required
            />

            <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={deliveryDetails.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-theme rounded-lg bg-theme-primary text-theme-primary focus:border-brand-orange focus:outline-none"
                required
            />

            <textarea
                name="instructions"
                placeholder="Delivery Instructions (Optional)"
                value={deliveryDetails.instructions}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-theme rounded-lg bg-theme-primary text-theme-primary focus:border-brand-orange focus:outline-none resize-none"
                rows="2"
            />
        </div>
    );
};

export default DeliveryForm;
