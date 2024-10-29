import { useState } from 'react';

interface StarProps {
  marked: boolean;
  starId: number;
}

interface StarRatingProps {
  value?: number;
  onChange?: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
}

const Star = ({ marked, starId }: StarProps) => {
  return (
    <span
      data-star-id={starId}
      className={`cursor-pointer transition-colors duration-150
        ${marked ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-200'}`}
      role="button"
      aria-label={`Rate ${starId} stars out of 5`}
    >
      {marked ? '★' : '☆'}
    </span>
  );
};

const StarRating = ({ value = 0, onChange, size = 'md' }: StarRatingProps) => {
  const [rating, setRating] = useState(value);
  const [selection, setSelection] = useState(0);

  const sizeClasses = {
    sm: 'text-lg space-x-1',
    md: 'text-2xl space-x-2',
    lg: 'text-4xl space-x-3'
  };

  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const starId = target.getAttribute('data-star-id');
    setSelection(starId ? parseInt(starId) : 0);
  };

  const handleMouseOut = () => {
    setSelection(0);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const starId = target.getAttribute('data-star-id');
    const newRating = starId ? parseInt(starId) : rating;
    setRating(newRating);
    onChange?.(newRating);
  };

  return (
    <div className="inline-flex items-center">
      <div
        className={`flex items-center ${sizeClasses[size]}`}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={`star_${i + 1}`}
            starId={i + 1}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
      <span className="ml-2 text-sm text-gray-600">
        {rating} out of 5
      </span>
    </div>
  );
};

export default StarRating;