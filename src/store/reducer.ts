import { createReducer } from '@reduxjs/toolkit';

import { CityName, IOffer } from '../model';
import { OFFERS_MOCK_DATA } from '../mocks';
import { changeCityName, changeSortingStrategy, fillOffers } from './action';
import { sortOffers, SortingStrategy } from '../components/sorting/sorting';

interface IOffersReducer {
    cityName: CityName;
    offers: IOffer[];
    sortingStrategy: SortingStrategy;
}

const INITIAL_STATE: IOffersReducer = {
  cityName: CityName.PARIS,
  offers: OFFERS_MOCK_DATA,
  sortingStrategy: SortingStrategy.POPULAR
};

export const offersReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(changeCityName, (state, { payload: selectedCityName }) => {
      state.cityName = selectedCityName;
    })
    .addCase(fillOffers, (state, { payload: offers }) => {
      state.offers = offers;
    })
    .addCase(changeSortingStrategy, (state, { payload: sortingStrategy }) => {
      state.sortingStrategy = sortingStrategy;
      state.offers = sortOffers(state.offers, sortingStrategy);
    });
});
