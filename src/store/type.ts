import { store } from './index';

import { IOfferStoreState } from './offer/offer';
import { IReviewStoreState } from './reviews/review';
import { IUserStoreState } from './user/user';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchFunc = () => AppDispatch;

export type ReducerType = {
  offer: IOfferStoreState;
  user: IUserStoreState;
  review: IReviewStoreState;
}
