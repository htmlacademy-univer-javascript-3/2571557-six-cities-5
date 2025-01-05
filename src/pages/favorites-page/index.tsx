import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { IOffer } from '../../model';
import { Offer } from '../../components/offers/offer-item';
import { useAppSelector } from '../../store';
import { favoritesSelector } from '../../store/offer/selectors';
import { Header } from '../../components/header';
import { EmptyFavoritesList } from '../../components/empty-favorite-list';
import { userSelector } from '../../store/user/selectors';
import { AppRoutes } from '../routes';

type GroupedOffers = [string, IOffer[]];

export const FavoritesPage = () => {
  const user = useAppSelector(userSelector);
  const offers = useAppSelector(favoritesSelector);
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
      <Header user={user} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            offers.length === 0 ? <EmptyFavoritesList /> : (
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {grouped.map(([name, groupedOffers]) => (
                    <li className="favorites__locations-items" key={name}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to="#">
                            <span>{name}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {groupedOffers.map((offer) => (<Offer block='favorites' offer={offer} key={offer.id} isNeedChangeFavoriteStatusForward={false}/>))}
                      </div>
                    </li>)
                  )}
                </ul>
              </section>
            )
          }
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoutes.MAIN}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
};
