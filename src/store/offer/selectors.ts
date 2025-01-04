import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../type';

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
  (items) => items
);

export const currentCitySelector = createSelector(
  [(state: RootState) => state.offer.city],
  (city) => city
);


