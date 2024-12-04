import { useMemo } from 'react';

import { IOffer } from '../../model';
import { Offer } from '../../components/offers/offer-item';
import { useAppSelector } from '../../store';
import { offersSelector } from '../../store/offer/selectors';
import { Header } from '../../components/header';
import { authSelector } from '../../store/user/selectors';
import { AuthState } from '../routes';

type GroupedOffers = [string, IOffer[]];

export const FavoritesPage = () => {
  const auth = useAppSelector(authSelector);
  const offers = useAppSelector(offersSelector);
  const grouped: GroupedOffers[] = useMemo(() => {
    const map = new Map<string, IOffer[]>();
    offers.forEach((offer) => {
      if (map.has(offer.city.name)) {
        map.get(offer.city.name)?.push(offer);
      } else {
        map.set(offer.city.name, [offer]);
      }
    });
    return Array.from(map);
  }, [offers]);
  return (
    <div className="page">
      <Header isAuth={auth === AuthState.AUTH} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {grouped.map(([name, offers]) => (
                <li className="favorites__locations-items" key={name}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{name}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.map((offer) => (<Offer block='favorites' offer={offer} key={offer.id} />))}
                  </div>
                </li>)
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
};
