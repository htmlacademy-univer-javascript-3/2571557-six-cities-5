import { Fragment, useCallback, useEffect, useState } from 'react';

import { Rating, RATING_TO_STRING } from '../../model';

export interface ICommentSubmitProps {
  onSubmit: (comment: IUserReview) => void;
}

export interface IUserReview {
  comment: string;
  rating: Rating;
}

const INITIAL_REVIEW: IUserReview = { comment: '', rating: 0 };
const RATINGS: Rating[] = [ 1, 2, 3, 4, 5 ];

export const Comment = ({ onSubmit }: ICommentSubmitProps) => {
  const [isValid, setValid] = useState<boolean>(false);
  const [review, setReview] = useState<IUserReview>(INITIAL_REVIEW);

  const handleCommentChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview((prev) => ({ ...prev, comment: e.target.value }));
  }, []);

  const handleSubmitChange = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onSubmit(review);
    setReview(INITIAL_REVIEW);
  }, [onSubmit, review]);

  useEffect(() => {
    const isReviewValid = review.comment.length < 50 || review.comment.length > 300 || review.rating === 0;

    if (isValid !== isReviewValid) {
      setValid(isReviewValid);
    }
  }, [review, isValid]);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          RATINGS.map((rating) => (
            <Fragment key={rating}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={rating}
                id={`${rating}-stars`}
                type="radio"
                checked={rating === review.rating}
                onChange={() => {
                  setReview((prev) => ({ ...prev, rating: rating }));
                }}
              />
              <label
                htmlFor={`${rating}-stars`}
                className="reviews__rating-label form__rating-label"
                title={RATING_TO_STRING[rating]}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with
          at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
          onClick={handleSubmitChange}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
