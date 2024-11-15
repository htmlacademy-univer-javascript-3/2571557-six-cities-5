
import { PrivateRoute } from '../components/private-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes, AuthState, NotFoundPage, LoginPage, MainPage, OfferPage, FavoritesPage } from '../pages';

const App = () => {
  const auth: AuthState = AuthState.AUTH;

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
