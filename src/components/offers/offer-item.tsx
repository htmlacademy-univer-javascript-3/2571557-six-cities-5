import { memo } from 'react';
import { Link } from 'react-router-dom';
import { IOffer } from '../../model';
import { Favorite } from '../favorite';
import { BlockType, SIZE_BY_BLOCKS, RATING_LENGTH } from './const';

export interface IOfferProps {
  offer: IOffer;
  block: BlockType;
  offerSelected?: (id: string) => void;
  isNeedChangeFavoriteStatusForward: boolean;
}

const OfferImpl = ({ offer, block, offerSelected, isNeedChangeFavoriteStatusForward = false }: IOfferProps) => (
  <article className={`${block}__card place-card`}
    onMouseEnter={() => {
      offerSelected?.(offer.id);
    }}
    onMouseLeave={() => {
      offerSelected?.('');
    }}
  >
    {offer.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className={`${block}__image-wrapper place-card__image-wrapper`}>
      <Link to="#">
        <img
          className="place-card__image"
          src={offer.previewImage}
          {...SIZE_BY_BLOCKS[block]}
          alt="Place image"
        />
      </Link>
    </div>
    <div className={`${block}__card-info place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{offer.price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <Favorite block='place-card__bookmark' offer={offer} isChangeOnlyInList={isNeedChangeFavoriteStatusForward}/>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${offer.rating * RATING_LENGTH}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`../offer/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

export const Offer = memo(OfferImpl);
