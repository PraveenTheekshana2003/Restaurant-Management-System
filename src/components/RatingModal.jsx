import React, { useState } from 'react';

const RatingModal = ({ item, onClose, onSubmitRating }) => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = () => {
        if (rating === 0) {
            alert('Please select a rating!');
            return;
        }
        onSubmitRating(item.id, rating, review);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-theme-primary rounded-2xl shadow-2xl max-w-lg w-full">
                {/* Header */}
                <div className="bg-gradient-to-r from-brand-red to-brand-orange p-6 text-white rounded-t-2xl">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold">Rate Your Experience</h2>
                            <p className="text-white text-opacity-90 mt-1">{item.name}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-200 text-3xl font-bold"
                        >
                            ×
                        </button>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    {/* Star Rating */}
                    <div className="text-center">
                        <p className="text-theme-primary font-semibold mb-3">How would you rate this item?</p>
                        <div className="flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoveredRating(star)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                    className="text-5xl transition-transform hover:scale-110"
                                >
                                    <span
                                        className={
                                            star <= (hoveredRating || rating)
                                                ? 'text-yellow-500'
                                                : 'text-gray-300 dark:text-gray-600'
                                        }
                                    >
                                        ★
                                    </span>
                                </button>
                            ))}
                        </div>
                        {rating > 0 && (
                            <p className="mt-3 text-theme-secondary">
                                {rating === 1 && 'Poor'}
                                {rating === 2 && 'Fair'}
                                {rating === 3 && 'Good'}
                                {rating === 4 && 'Very Good'}
                                {rating === 5 && 'Excellent'}
                            </p>
                        )}
                    </div>

                    {/* Review Text */}
                    <div>
                        <label className="block text-sm font-bold text-theme-primary mb-2">
                            Review (Optional)
                        </label>
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Share your thoughts about this item..."
                            className="w-full px-4 py-3 border-2 border-theme rounded-lg bg-theme-secondary text-theme-primary focus:border-brand-orange focus:outline-none resize-none"
                            rows="4"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-brand-red to-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:from-brand-red-dark hover:to-brand-red transition-all shadow-lg transform hover:scale-105"
                    >
                        Submit Rating
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RatingModal;
