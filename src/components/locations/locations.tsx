import { LocationItem } from './location-item';
import { CityName } from '../../model';
import { useAppDispatch } from '../../store';
import { useCallback } from 'react';
import { changeCity } from '../../store/offer/action';

export const Locations = () => {
  const dispatch = useAppDispatch();
  const handleLocationItemClick = useCallback((city: CityName) => { 
    dispatch(changeCity(city));
  },[dispatch]);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(CityName).map((city) =>
          <LocationItem cityName={city} key={city} onClickLocationCallback={()=> handleLocationItemClick(city)}/>
        )}
      </ul>
    </section>
  );
};
