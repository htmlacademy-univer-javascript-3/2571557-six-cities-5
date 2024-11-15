import { Offer } from './offer-item';
import { BlockType } from './const';
import { IOffer } from '../../model';

export interface IOffersProps {
  offers: IOffer[];
  block: BlockType;
  offerSelected?: (id: string) => void;
}

export const Offers = ({ offers, block, offerSelected }: IOffersProps) => (
  <div className={`${block === 'near-places' ? `${block}__list` : `${block}__places-list`}  tabs__content`}>
    {offers.map((offer) => (<Offer key={offer.id} block={block} offer={offer} offerSelected={offerSelected} />))}
  </div>
);
