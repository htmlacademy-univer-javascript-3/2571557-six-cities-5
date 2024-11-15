import { createAction } from '@reduxjs/toolkit';
import { CityName, IOffer } from '../model';
import { SortingStrategy } from '../components/sorting/sorting';

export const changeCityName = createAction<CityName>('offers/changeCityName');
export const fillOffers = createAction<IOffer[]>('offers/fillOffers');
export const changeSortingStrategy = createAction<SortingStrategy>('offers/changeSortingStrategy');
