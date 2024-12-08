import { createBrowserHistory } from 'history';
import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';

export const browserHistory = createBrowserHistory();

export const redirect: Middleware =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'user/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
