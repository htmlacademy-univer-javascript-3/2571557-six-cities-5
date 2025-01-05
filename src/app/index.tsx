
import { PrivateRoute } from '../components/private-route';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, NotFoundPage, LoginPage, MainPage, OfferPage, FavoritesPage } from '../pages';
import { HistoryRouter } from '../pages/history-route';
import { browserHistory } from '../pages/browser-history';
import { useAppDispatch, useAppSelector } from '../store';
import { useEffect } from 'react';
import { Spinner } from '../components/spinner';

import { checkAuth } from '../store/user/action';
import { fetchOffers } from '../store/offer/action';
import { AuthState } from '../model';
import { authSelector, userSelector } from '../store/user/selectors';

export const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const auth = useAppSelector(authSelector);
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchOffers());
  }, [ dispatch ]);
  if (auth === AuthState.UNKNOWN) {
    return <Spinner />;
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage />} />
        <Route path={AppRoutes.OFFER} element={<OfferPage />} />
        <Route
          path={AppRoutes.FAVORITES}
          element={
            <PrivateRoute user={user}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        {/* Match any other route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
};
