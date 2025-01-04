import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../type';

export const reviewsSelector = createSelector(
  [(state: RootState) => state.review.reviews],
  (items) => items
);

export const isLoadingReviewsSelector = createSelector(
  [(state: RootState) => state.review.isLoading],
  (flag) => flag
);

export const isErrorReviewsSelector = createSelector(
  [(state: RootState) => state.review.isError],
  (flag) => flag
);
