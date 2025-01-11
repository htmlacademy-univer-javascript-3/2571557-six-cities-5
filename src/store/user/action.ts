import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IAuth, IUser } from '../../model';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../../shared/api/token';
import { AppRoutes } from '../../pages';
import { AppDispatch, RootState } from '../type';
import { fetchFavorites, fetchOffers } from '../offer/action';
import { AuthState } from '../../model';

export const setUser = createAction<IUser|null>('user/setUser');
export const changeAuthStatus = createAction<AuthState>('user/changeAuthStatus');
export const redirectToRoute = createAction<AppRoutes>('user/redirectToRoute');
export const checkAuth = createAsyncThunk<void, undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }>
  (
    'user/checkAuth',
    async (_arg, { dispatch, extra: api }) => {
      try {
        const { data: user } = await api.get<IUser>(AppRoutes.LOGIN);
        dispatch(changeAuthStatus(AuthState.KNOWN));
        dispatch(setUser(user));
        dispatch(fetchFavorites());
      } catch {
        dispatch(changeAuthStatus(AuthState.KNOWN));
        dispatch(setUser(null));
      }
    },
  );

export const login = createAsyncThunk<void, IAuth, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: user } = await api.post<IUser>(AppRoutes.LOGIN, { email, password });
    saveToken(user.token);
    dispatch(redirectToRoute(AppRoutes.MAIN));
    dispatch(setUser(user));
    dispatch(changeAuthStatus(AuthState.KNOWN));
    await dispatch(fetchFavorites());
    await dispatch(fetchOffers());
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(AppRoutes.LOGOUT);
    dropToken();
    dispatch(setUser(null));
    await dispatch(fetchOffers());
  },
);
