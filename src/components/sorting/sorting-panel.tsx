import { useState } from 'react';
import { changeSortingStrategy } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { SortingStrategy } from './sorting';

export const SortingPanel = () => {
  const dispatch = useAppDispatch();
  const { sortingStrategy } = useAppSelector((state) => state.offers);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" style={{ paddingLeft: 5 }} tabIndex={0} onClick={() => setIsExpanded((prev) => !prev)}>
        {sortingStrategy}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isExpanded ? 'places__options--opened' : ''}`}>
        {
          Object.values(SortingStrategy).map((strategy) => (
            <li
              key={strategy}
              className={`places__option ${strategy === sortingStrategy ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => {
                setIsExpanded(false);
                dispatch(changeSortingStrategy(strategy));
              }}
            >
              { strategy }
            </li>
          ))
        }
      </ul>
    </form>
  );
};
