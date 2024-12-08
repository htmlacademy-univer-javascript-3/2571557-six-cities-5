import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../type';
import { AxiosInstance } from 'axios';
import { IAddReview, IReview } from '../../model';
import { ApiRoutes } from '../../shared/api/api';

export const setReviewsOnPage = createAction<IReview[]>('review/setReviewsOnPage');
export const fetchReviews = createAsyncThunk<void, string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'review/fetchReviews',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<IReview[]>(`${ApiRoutes.GET_REVIEWS}/${offerId}`);
    dispatch(setReviewsOnPage(data));
  },
);

export const addReview = createAsyncThunk<
  void, IAddReview, {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'review/addReview',
  async ({ comment, rating, offerId }, { dispatch, extra: api }) => {
    await api.post<IReview>(`${ApiRoutes.GET_REVIEWS}/${offerId}`, { comment, rating });
    dispatch(fetchReviews(offerId));
  },
);
