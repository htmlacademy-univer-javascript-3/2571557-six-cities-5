import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../type';

export const authSelector = createSelector(
  [(state: RootState) => state.user.authStatus],
  (items) => items
);
