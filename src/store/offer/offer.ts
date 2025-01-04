import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSort, fillOffers, setNearOffer, setCurrentOffer, setOffersDateIsLoading, setFavorites } from './action';
import { SortingStrategy, sortOffers } from './sorting-strategy';
import { CityName, IOffer } from '../../model';

export interface IOfferStoreState {
  city: CityName;
  offers: IOffer[];
  nearOffers: IOffer[];
  sortingStrategy: SortingStrategy;
  isLoading: boolean;
  selectedOffer: IOffer | null;
  favorites: IOffer[];
}

const INITIAL_STATE: IOfferStoreState = {
  city: CityName.PARIS,
  offers: [],
  nearOffers: [],
  sortingStrategy: SortingStrategy.POPULAR,
  isLoading: false,
  selectedOffer: null,
  favorites: []
};

export const offersReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(changeCity, (state, { payload }) => {
    state.city = payload;
  }).addCase(fillOffers, (state, { payload }) => {
    state.offers = payload;
  }).addCase(changeSort,(state, { payload }) => {
    state.sortingStrategy = payload;
    state.offers = sortOffers(state.offers, payload);
  }).addCase(setOffersDateIsLoading, (state, { payload }) => {
    state.isLoading = payload;
  }).addCase(setCurrentOffer, (state, { payload }) => {
    state.selectedOffer = payload;
  }).addCase(setNearOffer,(state, { payload })=>{
    state.nearOffers = payload;
  }).addCase(setFavorites,(state, { payload })=> {
    state.favorites = payload;
  });
});
