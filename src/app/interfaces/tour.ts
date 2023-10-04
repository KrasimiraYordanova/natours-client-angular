import { IUser } from "./user";

export interface ITour {
        _id: string,
        name: string,
        slug: string,
        ratingAverage: number,
        ratingQuantity: number,
        description: string,
        duration: number,
        summary: string,
        difficulty: string[],
        price: number,
        priceDiscount: number,
        maxGroupSize: number,
        _ownerId: IUser,
        imageCover: string,
        images: string[],
        createdAt: string,
        startDates: string[],
        secretTour: boolean,

        startLocation: {
          type: string,
          coordinates: number[],
          address: string,
          description: string
        },

        locations: [{ 
          type: string, 
          coordinates: number[],
          description: string, 
          day: number }]
        
        guides: IUser[],
        __v: number
}