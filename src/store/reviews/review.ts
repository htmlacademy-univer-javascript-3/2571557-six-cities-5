import { createReducer } from '@reduxjs/toolkit';
import { addReview, setIsLoadingReview, setReviewsOnPage } from './action';
import { IReview } from '../../model';

export interface IReviewStoreState {
  reviews: IReview[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: IReviewStoreState = {
  reviews: [],
  isLoading: false,
  isError: false
};

export const reviewsReducer = createReducer(initialState, (builder)=>{
  builder.addCase(setReviewsOnPage,(state, { payload }) => {
    if (Array.isArray(payload)) {
      const arrayForResolve = [...payload];
      arrayForResolve.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
      state.reviews = arrayForResolve;
    }
  })
    .addCase(addReview.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addReview.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    })
    .addCase(addReview.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(setIsLoadingReview, (state, { payload }) => {
      state.isLoading = payload;
    });
});
