import { Link } from 'react-router-dom';
import { memo } from 'react';

import { IUser } from '../../model';
import { useAppDispatch, useAppSelector } from '../../store';
import { AppRoutes } from '../../pages';
import { favoritesSelector } from '../../store/offer/selectors';

import { logout } from '../../store/user/action';

export interface IHeaderProps {
  user: IUser | null;
}

const HeaderImpl = ({ user }: IHeaderProps) => {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(favoritesSelector);
  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = () => {
    dispatch(logout());
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link"
              to={'..'}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {!!user && (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoutes.FAVORITES}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {user?.email}
                    </span>
                    <span className="header__favorite-count">{favoriteOffers.length}</span>
                  </Link>
                </li>
              )}
              <li className="header__nav-item">
                {
                  user ? (
                    <span
                      className="header__nav-link"
                      style={{ cursor: 'pointer' }}
                      onClick={handleLogout}
                    >
                      <span className="header__signout">Log Out</span>
                    </span>
                  ) : (
                    <Link className="header__nav-link" to={AppRoutes.LOGIN}>
                      <span className="header__signout">Sign in</span>
                    </Link>
                  )
                }

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export const Header = memo(HeaderImpl);
