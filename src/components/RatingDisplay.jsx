import React from 'react';

const RatingDisplay = ({ rating }) => {
    if (!rating || rating.count === 0) {
        return <div className="text-xs text-theme-secondary">No ratings yet</div>;
    }

    const { average, count } = rating;
    const fullStars = Math.floor(average);
    const hasHalfStar = average % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, i) => (
                    <span key={`full-${i}`} className="text-yellow-500">★</span>
                ))}
                {hasHalfStar && <span className="text-yellow-500">⯨</span>}
                {[...Array(emptyStars)].map((_, i) => (
                    <span key={`empty-${i}`} className="text-gray-300 dark:text-gray-600">★</span>
                ))}
            </div>
            <span className="text-xs text-theme-secondary">
                {average.toFixed(1)} ({count})
            </span>
        </div>
    );
};

export default RatingDisplay;
