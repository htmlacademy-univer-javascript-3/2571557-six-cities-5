import { LocationItem } from './location-item';
import { CityName } from '../../model';
import { useAppDispatch } from '../../store';
import { changeCity } from '../../store/offer/action';

export const Locations = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(CityName).map((city) =>
          <LocationItem cityName={city} key={city} onClickLocationHandler={()=>dispatch(changeCity(city))}/>
        )}
      </ul>
    </section>
  );
};
