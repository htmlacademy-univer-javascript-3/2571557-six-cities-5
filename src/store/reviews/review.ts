import { createReducer } from '@reduxjs/toolkit';
import { setReviewsOnPage } from './action';
import { IReview } from '../../model';

export interface IReviewStoreState {
  reviews: IReview[]
}

const initialState: IReviewStoreState = {
  reviews: [],
};

export const reviewsReducer = createReducer(initialState, (builder)=>{
  builder.addCase(setReviewsOnPage,(state, { payload }) => {
    if (Array.isArray(payload)) {
      let arrayForResolve = [...payload];
      arrayForResolve.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
      state.reviews = arrayForResolve.slice(0, 10);
    }
  });
});
