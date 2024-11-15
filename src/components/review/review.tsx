import { IReview } from '../../model';
import { ReviewItem } from './review-item';

interface ReviewProps {
  reviews: IReview[];
}

export const Review = ({ reviews }: ReviewProps) => (
  <ul className="reviews__list">
    {reviews.map((review) => (<ReviewItem key={review.id} {...review} />))}
  </ul>
);
