import { useMemo, useState, useCallback } from 'react';

import { Locations } from '../../components/locations';
import { SortingPanel } from '../../components/sorting/sorting-panel';
import { Offers } from '../../components/offers';
import { CityMap } from '../../components/city-map';
import { currentCitySelector, offersSelector } from '../../store/offer/selectors';
import { IOffer } from '../../model';
import { useAppSelector } from '../../store';
import { Header } from '../../components/header';
import { userSelector } from '../../store/user/selectors';

export const MainPage = () => {
  const user = useAppSelector(userSelector);
  const offers = useAppSelector(offersSelector);
  const city = useAppSelector(currentCitySelector);
  const offersForActiveCity = useMemo(() => offers.filter((el: IOffer) => el.city.name === city), [city, offers]);
  const [activeOffer, setActiveOffer] = useState<string>('');
  const onActiveOfferChangeCallback = useCallback((id: string) => {
    setActiveOffer(id);
  },[]);
  return (
    <div className="page page--gray page--main">
      <Header user={user} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersForActiveCity.length} places to stay in {city}</b>
              <SortingPanel />
              <Offers block='cities' offers={offersForActiveCity} offerSelectedCallback={onActiveOfferChangeCallback}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {offers.length && <CityMap offers={offersForActiveCity} selectedOfferId={activeOffer} city={offersForActiveCity[0].city}/>}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
