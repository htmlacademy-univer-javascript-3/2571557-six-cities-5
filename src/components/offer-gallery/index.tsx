export interface IOfferGallery {
  images: string[];
}

export const OfferGallery = ({ images }: IOfferGallery) => (
  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {
        images.map((url) => (
          <div className="offer__image-wrapper" key={url}>
            <img
              className="offer__image"
              src={url}
              alt="Photo studio"
            />
          </div>
        ))
      }
    </div>
  </div>
);
