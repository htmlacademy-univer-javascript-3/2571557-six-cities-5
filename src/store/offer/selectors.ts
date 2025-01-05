import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../type';

import { MAX_NEAR_OFFERS_AMOUNT } from '../const';

export const favoritesSelector = createSelector(
  [(state: RootState) => state.offer.favorites],
  (items) => items
);

export const selectCurrentSort = createSelector(
  [(state: RootState) => state.offer.sortingStrategy],
  (items) => items
);

export const offersSelector = createSelector(
  [(state: RootState) => state.offer.offers],
  (items) => items
);

export const offerOnPageSelector = createSelector(
  [(state: RootState) => state.offer.selectedOffer],
  (items) => items
);

export const nearOffersSelector = createSelector(
  [(state: RootState) => state.offer.nearOffers],
  (items) => items.slice(0, MAX_NEAR_OFFERS_AMOUNT)
);

export const currentCitySelector = createSelector(
  [(state: RootState) => state.offer.city],
  (city) => city
);


