import { Link } from 'react-router-dom';
import { IOffer } from '../../model';
import { BlockType, SIZE_BY_BLOCKS } from './const';

export interface IOfferProps {
  offer: IOffer;
  block: BlockType;
  offerSelected?: (id: string) => void;
}

export const Offer = ({ offer, block, offerSelected }: IOfferProps) => (
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
      <a href="#">
        <img
          className="place-card__image"
          src={offer.previewImage}
          {...SIZE_BY_BLOCKS[block]}
          alt="Place image"
        />
      </a>
    </div>
    <div className={`${block}__card-info place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{offer.price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
          type="button"
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
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${offer.rating * 20}%` }} />
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
