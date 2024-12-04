import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../type';

export const reviewsSelector = createSelector(
  [(state: RootState) => state.review.reviews],
  (items) => items
);
