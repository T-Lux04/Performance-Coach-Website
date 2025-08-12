import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';

export default function StarRating({ rating = 5, outOf = 5 }) {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    const filled = i <= rating;
    stars.push(
      filled ? (
        <StarIcon key={i} className="h-6 w-6 text-yellow-400" aria-hidden="true" />
      ) : (
        <StarOutline key={i} className="h-6 w-6 text-yellow-400 opacity-40" aria-hidden="true" />
      )
    );
  }

  return (
    <div className="flex items-center justify-center gap-1" aria-label={`${rating} out of ${outOf} stars`}>
      {stars}
    </div>
  );
}
