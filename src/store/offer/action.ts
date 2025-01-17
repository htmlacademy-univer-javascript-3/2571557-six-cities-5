import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IChangeFavorite, SortingStrategy } from './sorting-strategy';
import { AppDispatch, RootState } from '../type';
import { AxiosInstance } from 'axios';

import { IOffer } from '../../model';
   
import { redirectToRoute } from '../user/action';
import { CityName } from '../../model';
import { AppRoutes } from '../../pages';
import { ApiRoutes } from '../../shared/api/api';

export const changeCity = createAction<CityName>('offer/changeCity');
export const setOffers = createAction<IOffer[]>('offer/setOffers');
export const setCurrentOffer = createAction<IOffer | null>('offer/setCurrentOffer');
export const setNearOffer = createAction<IOffer[]>('offer/setNearOffer');
export const changeSort = createAction<SortingStrategy>('offer/changeSort');
export const setOffersDateIsLoading = createAction<boolean>('offer/setOffersDateIsLoading');
export const setFavorites = createAction<IOffer[]>('favorite/setFavorites');
export const changeStatusOfCurrFavorite = createAction<IOffer>('favorite/changeStatusOfCurrFavorite');

export const fetchOffers = createAsyncThunk<void, undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }>
  (
    'offer/fetchOffers',
    async (_arg, { dispatch, extra: api }) => {
      dispatch(setOffersDateIsLoading(true));
      const { data } = await api.get<IOffer[]>(ApiRoutes.OFFERS);
      dispatch(setOffersDateIsLoading(false));
      dispatch(setOffers(data));
    },
  );

export const fetchNearOffersById = createAsyncThunk<void, string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }>
  (
    'offer/fetchNearOffersById',
    async (offerId, { dispatch, extra: api }) => {
      const { data } = await api.get<IOffer[]>(`${ApiRoutes.OFFERS}/${offerId}/nearby`);
      dispatch(setNearOffer(data?.slice(0, 3)));
    },
  );

export const fetchOfferById = createAsyncThunk<void, string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }>
  (
    'offer/fetchOfferById',
    async (offerId, { dispatch, extra: api }) => {
      try {
        dispatch(setOffersDateIsLoading(true));
        const { data } = await api.get<IOffer>(`${ApiRoutes.OFFERS}/${offerId}`);
        dispatch(setCurrentOffer(data));
      } catch (e) {
        dispatch(redirectToRoute(AppRoutes.NOT_FOUND));
      } finally {
        dispatch(setOffersDateIsLoading(false));
      }
    },
  );


export const fetchFavorites = createAsyncThunk<void, undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }>
  (
    '/fetchFavorites',
    async (_arg, { dispatch, extra: api }) => {
      const { data } = await api.get<IOffer[]>(ApiRoutes.GET_FAVORITES);
      dispatch(setFavorites(data));
    },
  );

export const changeFavoriteStatus = createAsyncThunk<
  void, IChangeFavorite, {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'favorite/changeFavoriteStatus',
  async ({ inFavorite, offerId }, { dispatch, extra: api, getState }) => {
    await api.post(`${ApiRoutes.GET_FAVORITES}/${offerId}/${inFavorite ? 0 : 1}`);
    dispatch(fetchFavorites());
    dispatch(fetchOffers());
    if (getState().offer.selectedOffer){
      await dispatch(fetchOfferById(offerId));
    }
  },
);
