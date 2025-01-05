import { createReducer } from '@reduxjs/toolkit';
import { changeAuthStatus, setUser } from './action';
import { AuthState } from '../../model';
import { IUser } from '../../model';

export interface IUserStoreState {
  authStatus: AuthState;
  user: IUser | null;
}

const initialState: IUserStoreState = {
  authStatus: AuthState.UNKNOWN,
  user: null
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeAuthStatus,(state, { payload })=> {
    state.authStatus = payload;
  }).addCase(setUser, (state, { payload }) => {
    state.user = payload;
  });
});


