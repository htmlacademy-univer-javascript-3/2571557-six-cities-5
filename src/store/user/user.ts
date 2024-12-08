import { createReducer } from '@reduxjs/toolkit';
import { changeAuthStatus } from './action';
import { AuthState } from '../../pages';

export interface IUserStoreState {
  authStatus: AuthState;
}

const initialState: IUserStoreState = {
  authStatus: AuthState.AUTH
};


export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeAuthStatus,(state, { payload })=> {
    state.authStatus = payload;
  });
});


