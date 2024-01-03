import { IReview } from "./review";
import { IUser } from "./user";

export interface INewTour {
    name: string, 
    description: string, 
    duration: number, 
    summary: string, 
    difficulty: string, 
    price: number, 
    priceDiscount: number, 
    maxGroupSize: number,

    // formGroup 
    startLocation: {
        coordinates: number[],
        address: string,
        description: string
    },

    // formGroup
    locations: [{
        coordinates: number[],
        address: string,
        description: string
    }]

    // formGroup
    guides: [
        { name: string, role: string }
    ],
}