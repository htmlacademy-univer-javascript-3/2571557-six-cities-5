import { Navigate } from 'react-router-dom';
import { IUser } from '../../model';
import { AppRoutes } from '../../pages/routes';

interface PrivateRouteProps {
  children: JSX.Element;
  user: IUser | null;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { children, user } = props;

  return user ? children : <Navigate to={AppRoutes.NOT_FOUND} />;
};
