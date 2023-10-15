import { IUser } from "./user";

export interface ITour {
        _id: string, // no
        name: string, // yes
        slug: string, // no
        ratingAverage: number, // no
        ratingQuantity: number, // no
        description: string, //yes
        duration: number, // yes
        summary: string, // yes
        difficulty: string[], // yes
        price: number, // yes
        priceDiscount: number, // yes
        maxGroupSize: number, // yes
        _ownerId: IUser, // no
        imageCover: string, // yes
        images: string[], // yes
        createdAt: string, // no
        startDates: string[], // yes
        secretTour: boolean, // no

        // formGroup 
        startLocation: {
          type: string, // yes
          coordinates: number[], // yes
          address: string, // yes
          description: string // yes
        },

        // formGroup
        locations: [{ 
          type: string, // yes
          coordinates: number[], // yes
          description: string, // yes
          day: number }] // no
        
        guides: IUser[], // ???
        __v: number
}