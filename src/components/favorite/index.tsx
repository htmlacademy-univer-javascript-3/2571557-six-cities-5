import { IOffer } from '../../model';
import { useAppDispatch } from '../../store';
import { changeFavoriteStatus } from '../../store/offer/action';

export interface IFavoriteProps {
  offer: IOffer;
}

export const Favorite = ({ offer }: IFavoriteProps) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(changeFavoriteStatus({ offerId: offer.id, inFavorite: offer.isFavorite }));
  };
  return (
    <button
      className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
      type="button"
      onClick={clickHandler}
    >
      <svg
        className="place-card__bookmark-icon"
        width={18}
        height={19}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{offer.isFavorite ? 'In' : 'To'} bookmarks</span>
    </button>
  );
};
