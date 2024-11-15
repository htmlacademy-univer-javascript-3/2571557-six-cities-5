import { CityName, ICity, IOffer, IReview, RoomType } from '../model';


export const CITY_MOCK: ICity = {
  'name': CityName.AMSTERDAM,
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  }
};

export const CITIES_MOCK: ICity[] = [
  {
    name: CityName.AMSTERDAM,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  {
    name: CityName.BRUSSELS,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  {
    name: CityName.COLOGNE,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  {
    name: CityName.PARIS,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  {
    name: CityName.HAMBURG,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  {
    name: CityName.DUSSELDORF,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
];

export const OFFERS_MOCK_DATA: IOffer[] = [
  {
    'id': '1',
    'title': 'Wood and stone place',
    'type': RoomType.HOUSE,
    'price': 576,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': CityName.PARIS,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': '2',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': RoomType.HOTEL,
    'price': 493,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': CityName.PARIS,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '3',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': RoomType.HOUSE,
    'price': 438,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': CityName.PARIS,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1
  },
  {
    'id': '4',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': RoomType.ROOM,
    'price': 275,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': CityName.PARIS,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 3
  }];

export const OFFERS_NEIGHBOURHOOD_MOCK_DATA: IOffer[] = [
  {
    'id': '1',
    'title': 'Wood and stone place',
    'type': RoomType.APARTMENT,
    'price': 999,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': CityName.PARIS,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': '2',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': RoomType.HOTEL,
    'price': 444,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': CityName.PARIS,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '3',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': RoomType.ROOM,
    'price': 123,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': CityName.PARIS,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1
  }];


export const REVIEWS_MOCK: IReview[] = [
  {
    'id': '1',
    'date': '2019-05-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 4
  }
];

