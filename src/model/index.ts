export enum RoomType {
  ROOM = 'room',
  APARTMENT = 'apartment',
  HOUSE = 'house',
  HOTEL = 'hotel'
}

export enum CityName {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf'
}

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export const RATING_TO_STRING: Record<Rating, string> = {
  0: 'UNDEFINED',
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
};

export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface ICity {
  name: CityName;
  location: ILocation;
}

export interface IHost {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface IOffer {
  id: string;
  title: string;
  type: RoomType;
  price: number;
  previewImage: string;
  city: ICity;
  location: ILocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: IHost;
  images: string[];
  maxAdults: number;
}

export interface IUser {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email?: string;
  token?: string;
}

export interface IReview {
  id: string;
  date: string;
  user: IUser;
  comment: string;
  rating: Rating;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IAddReview {
  offerId: string;
  comment: string;
  rating: number;
}
