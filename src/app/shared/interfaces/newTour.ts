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
        type: string,
        coordinates: number[],
        address: string,
        description: string
    },

    // formGroup
    locations: [{
        type: string,
        coordinates: number[],
        description: string,
        day: number
    }]

    // formGroup
    guides: [
        { name: string, role: string }
    ],
}