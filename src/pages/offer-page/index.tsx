import { useParams } from 'react-router-dom';
import { useMemo, useEffect, useCallback } from 'react';

import { useAppSelector, useAppDispatch } from '../../store';
import { nearOffersSelector, offerOnPageSelector } from '../../store/offer/selectors';
import { reviewsSelector } from '../../store/reviews/selectors';

import { fetchOfferById } from '../../store/offer/action';
import { addReview } from '../../store/reviews/action';

import { Review } from '../../components/review';
import { Comment, IUserReview } from '../../components/comment';
import { CityMap } from '../../components/city-map';
import { Offers } from '../../components/offers';
import { Spinner } from '../../components/spinner';
import { OfferGallery } from '../../components/offer-gallery';
import { OfferDetails } from '../../components/offers/offer-details';
import { Header } from '../../components/header';
import { userSelector } from '../../store/user/selectors';
import { fetchReviews } from '../../store/reviews/action';
import { fetchNearOffersById } from '../../store/offer/action';

const MAX_IMAGES_COUNT = 6;

export const OfferPage = () => {
  const { id: offerId } = useParams();
  const nearOffers = useAppSelector(nearOffersSelector);
  const offerOnPage = useAppSelector(offerOnPageSelector);
  const offersForMap = useMemo(() => nearOffers.concat(offerOnPage || []), [nearOffers, offerOnPage]);
  const reviews = useAppSelector(reviewsSelector);
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const handleCommentSubmit = useCallback(({ comment, rating }: IUserReview) => {
    if (offerId) {
      dispatch(addReview({ comment, rating, offerId }));
    }
  }, [ offerId, dispatch ]);
  useEffect(() => {
    dispatch(fetchOfferById(offerId ?? ''));
    dispatch(fetchNearOffersById(offerId ?? ''));
    dispatch(fetchReviews(offerId ?? ''));
  }, [ offerId, dispatch ]);
  if (!offerOnPage) {
    return <Spinner />;
  }
  return (
    <div className="page">
      <Header user={user} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={offerOnPage.images.slice(0, MAX_IMAGES_COUNT)} />
          <OfferDetails offer={offerOnPage}>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{reviews.length}</span>
              </h2>
              <Review reviews={reviews} />
              { !!user && <Comment onSubmitCallback={handleCommentSubmit}/> }
            </section>
          </OfferDetails>
          <section className="offer__map map">
            <CityMap offers={offersForMap} selectedOfferId={offerId} city={offerOnPage.city}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <Offers block='near-places' offers={nearOffers} isNeedChangeFavoriteStatusForward/>
          </section>
        </div>
      </main>
    </div>
  );
};
