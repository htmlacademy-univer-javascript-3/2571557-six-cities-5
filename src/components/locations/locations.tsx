import { LocationItem } from './location-item';
import { CityName } from '../../model';

import { useAppDispatch } from '../../store/hooks';
import { changeCityName } from '../../store/action';

export const Locations = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(CityName).map((city) =>
          <LocationItem cityName={city} key={city} onClickLocationHandler={()=>dispatch(changeCityName(city))}/>
        )}
      </ul>
    </section>
  );
};
