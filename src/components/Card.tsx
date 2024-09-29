import { ApartmentType, ICard } from '../model/interfaces';

export interface IBookmarkProps {
    inBookmarks: boolean;
}

function PremiumBadge() {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function Bookmark({ inBookmarks }: IBookmarkProps) {
  if (inBookmarks) {
    return (
      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
    );
  }

  return (
    <button className="place-card__bookmark-button button" type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

function Card({ inBookmarks, premium, image, price, stars, title, type }: ICard) {
  return (
    <article className="cities__card place-card">
      {
        premium && <PremiumBadge/>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark inBookmarks={inBookmarks}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ { width: `${100 * stars / 5}%` } }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{ title }</a>
        </h2>
        <p className="place-card__type">{ type === ApartmentType.ROOM ? 'Room' : 'Apartment' }</p>
      </div>
    </article>
  );
}

export default Card;
