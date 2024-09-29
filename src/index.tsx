import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { ApartmentType, ICard } from './model/interfaces';

const data: ICard[] = [
  {
    id: 1,
    inBookmarks: false,
    premium: true,
    image: 'img/apartment-01.jpg',
    price: 120,
    stars: 4,
    title: 'Beautiful & luxurious apartment at great location',
    type: ApartmentType.APARTMENT
  },
  {
    id: 2,
    inBookmarks: true,
    premium: false,
    image: 'img/room.jpg',
    price: 80,
    stars: 4,
    title: 'Wood and stone place',
    type: ApartmentType.ROOM
  },
  {
    id: 3,
    inBookmarks: false,
    premium: false,
    image: 'img/apartment-02.jpg',
    price: 132,
    stars: 4,
    title: 'Canal View Prinsengracht',
    type: ApartmentType.APARTMENT
  },
  {
    id: 4,
    inBookmarks: false,
    premium: true,
    image: 'img/apartment-03.jpg',
    price: 180,
    stars: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: ApartmentType.APARTMENT
  },
  {
    id: 5,
    inBookmarks: true,
    premium: false,
    image: 'img/room.jpg',
    price: 80,
    stars: 4,
    title: 'Wood and stone place',
    type: ApartmentType.ROOM
  }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App apartments={data} />
  </React.StrictMode>
);
