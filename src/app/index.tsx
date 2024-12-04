
import { PrivateRoute } from '../components/private-route';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, NotFoundPage, LoginPage, MainPage, OfferPage, FavoritesPage } from '../pages';
import { HistoryRouter } from '../pages/history-route';
import { browserHistory } from '../pages/browser-history';
import { useAppDispatch, useAppSelector } from '../store';
import { authSelector } from '../store/user/selectors';
import { useEffect } from 'react';

import { checkAuth } from '../store/user/action';
import { fetchOffers } from '../store/offer/action';

export const App = () => {
  const auth = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth())
    dispatch(fetchOffers())
  }, []);
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage />} />
        <Route path={AppRoutes.OFFER} element={<OfferPage />} />
        <Route
          path={AppRoutes.FAVORITES}
          element={
            <PrivateRoute auth={auth}>
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
