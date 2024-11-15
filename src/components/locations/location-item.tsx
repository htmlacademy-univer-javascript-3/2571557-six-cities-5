import { Link } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import { CityName } from '../../model';

export interface ILocationProps {
  cityName: CityName;
  onClickLocationHandler: () => void;
}

export const LocationItem = ({ cityName, onClickLocationHandler }: ILocationProps) => {
  const { cityName: activeCityName } = useAppSelector((state) => state.offers);

  return (
    <li className="locations__item">
      <Link to={'#'} className={`locations__item-link tabs__item 
        ${activeCityName === cityName ? 'tabs__item--active' : ''}`} onClick={onClickLocationHandler}
      >
        {cityName}
      </Link>
    </li>
  );
};
