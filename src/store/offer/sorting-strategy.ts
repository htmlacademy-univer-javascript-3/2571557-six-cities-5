import { IOffer } from '../../model';

export enum SortingStrategy {
  POPULAR = 'Popular',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first'
}

export const SORTING_STRATEGIES: Record<SortingStrategy, (a: IOffer, b: IOffer) => number> = {
  [SortingStrategy.POPULAR]: () => 0, // no sort
  [SortingStrategy.PRICE_LOW_TO_HIGH]: (a, b) => a.price - b.price,
  [SortingStrategy.PRICE_HIGH_TO_LOW]: (a, b) => b.price - a.price,
  [SortingStrategy.TOP_RATED_FIRST]: (a, b) => b.rating - a.rating,
};

export const sortOffers = (offers: IOffer[], strategy: SortingStrategy): IOffer[] => offers.sort(SORTING_STRATEGIES[strategy]);
