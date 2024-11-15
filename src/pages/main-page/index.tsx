import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

import { AppRoutes } from '../routes';
import { Locations } from '../../components/locations';
import { SortingPanel } from '../../components/sorting/sorting-panel';
import { Offers } from '../../components/offers';
import { CityMap } from '../../components/city-map';
import { useAppSelector } from '../../store/hooks';

export const MainPage = () => {
  const { cityName, offers } = useAppSelector((state) => state.offers);
  const offersForActiveCity = useMemo(() => offers.filter((el) => el.city.name === cityName), [cityName, offers]);
  const [activeOffer, setActiveOffer] = useState<string>('');
  return (
    <div className="page page--gray page--main">
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
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoutes.FAVORITES}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersForActiveCity.length} places to stay in {cityName}</b>
              <SortingPanel />
              <Offers block='cities' offers={offersForActiveCity} offerSelected={setActiveOffer}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {offers.length && <CityMap offers={offersForActiveCity} selectedOfferId={activeOffer} />}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
