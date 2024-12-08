import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { api } from '../shared/api/api';
import { redirect } from '../pages/browser-history';

import { offersReducer } from './offer/offer';
import { userReducer } from './user/user';
import { reviewsReducer } from './reviews/review';

import { DispatchFunc, RootState } from './type';

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: {
    offer: offersReducer,
    user: userReducer,
    review: reviewsReducer
  },
  middleware:
    (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        }
      }).concat(redirect)
});
