import { Link } from 'react-router-dom';

import { CityName } from '../../model';
import { useAppSelector } from '../../store';
import { currentCitySelector } from '../../store/offer/selectors';

export interface ILocationProps {
  cityName: CityName;
  onClickLocationCallback: () => void;
}

export const LocationItem = ({ cityName, onClickLocationCallback }: ILocationProps) => {
  const city = useAppSelector(currentCitySelector);

  return (
    <li className="locations__item">
      <Link to={'#'} className={`locations__item-link tabs__item 
        ${city === cityName ? 'tabs__item--active' : ''}`} onClick={onClickLocationCallback}
      >
        {cityName}
      </Link>
    </li>
  );
};
