export enum ApartmentType {
    ROOM,
    APARTMENT
}

export interface ICard {
    id: number;
    premium: boolean;
    inBookmarks: boolean;
    image: string;
    price: number;
    stars: number;
    title: string;
    type: ApartmentType;
}
