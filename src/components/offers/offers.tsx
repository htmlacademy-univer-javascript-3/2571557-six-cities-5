import { memo } from 'react';
import { Offer } from './offer-item';
import { BlockType } from './const';
import { IOffer } from '../../model';

export interface IOffersProps {
  offers: IOffer[];
  block: BlockType;
  offerSelectedCallback?: (id: string) => void;
  isNeedChangeFavoriteStatusForward?: boolean;
}

const OffersImpl = ({ offers, block, offerSelectedCallback: offerSelected, isNeedChangeFavoriteStatusForward = false }: IOffersProps) => (
  <div className={`${block === 'near-places' ? `${block}__list` : `${block}__places-list`}  tabs__content`}>
    {offers.map((offer) => (
      <Offer
        key={offer.id}
        isNeedChangeFavoriteStatusForward={isNeedChangeFavoriteStatusForward}
        block={block}
        offer={offer}
        offerSelected={offerSelected}
      />
    ))}
  </div>
);

export const Offers = memo(OffersImpl);