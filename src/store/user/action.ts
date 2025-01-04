import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IAuth, IUser } from '../../model';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../../shared/api/token';
import { AppRoutes, AuthState } from '../../pages';
import { AppDispatch, RootState } from '../type';
import { fetchFavorites, fetchOffers } from '../offer/action';

export const setUser = createAction<IUser>('user/setUser');
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
        dispatch(changeAuthStatus(AuthState.AUTH));
        dispatch(setUser(user));
        dispatch(fetchFavorites());
      } catch {
        dispatch(changeAuthStatus(AuthState.NOT_AUTH));
        dispatch(redirectToRoute(AppRoutes.LOGIN));
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
    dispatch(changeAuthStatus(AuthState.AUTH));
    dispatch(setUser(user));
    dispatch(fetchFavorites());
    dispatch(fetchOffers());
    dispatch(redirectToRoute(AppRoutes.MAIN));
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
    dispatch(changeAuthStatus(AuthState.NOT_AUTH));
    dispatch(redirectToRoute(AppRoutes.LOGIN));
  },
);
