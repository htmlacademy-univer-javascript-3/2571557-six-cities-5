import { Navigate } from 'react-router-dom';
import { AuthState, AppRoutes } from '../../pages/routes';

interface PrivateRouteProps {
  children: JSX.Element;
  auth: AuthState;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { children, auth } = props;

  return auth === AuthState.AUTH ? children : <Navigate to={AppRoutes.NOT_FOUND} />;
};
