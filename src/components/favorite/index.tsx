import { memo } from 'react';
import { IOffer } from '../../model';
import { useAppDispatch, useAppSelector } from '../../store';
import { changeFavoriteStatus, changeStatusOfCurrFavorite } from '../../store/offer/action';
import { nearOffersSelector } from '../../store/offer/selectors';
import { ParamBlockType, PARAMS_BY_BLOCK_NAME } from '../offers/const';
import { userSelector } from '../../store/user/selectors';
import { AppRoutes } from '../../pages';

import { redirectToRoute } from '../../store/user/action';

export interface IFavoriteProps {
  offer: IOffer;
  isChangeOnlyInList: boolean;
  block: ParamBlockType;
}

const FavoriteImpl = ({ offer, block = 'offer__bookmark', isChangeOnlyInList = false }: IFavoriteProps) => {
  const dispatch = useAppDispatch();
  const nearOffers = useAppSelector(nearOffersSelector);
  const user = useAppSelector(userSelector);
  const handleBtnClick = () => {
    if (!user) {
      dispatch(redirectToRoute(AppRoutes.LOGIN));
      return;
    }

    if (isChangeOnlyInList && nearOffers) {
      const curNearOffer = nearOffers.find((el) => el.id === offer.id);
      if(curNearOffer) {
        dispatch(changeStatusOfCurrFavorite(curNearOffer));
      }
    }

    dispatch(changeFavoriteStatus({ offerId: offer.id, inFavorite: offer.isFavorite }));
  };
  return (
    <button
      className={`button ${block}-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
      type="button"
      onClick={handleBtnClick}
    >
      <svg
        className={`${block}-icon`}
        {...PARAMS_BY_BLOCK_NAME[block]}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{offer.isFavorite ? 'In' : 'To'} bookmarks</span>
    </button>
  );
};

export const Favorite = memo(FavoriteImpl);
