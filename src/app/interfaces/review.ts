import { ITour } from "./tour";
import { IUser } from "./user";

export interface IReview {
    _id: string,
    review: string, 
    rating: number,
    createdAt: string,
    tour: ITour,
    user: IUser,
    __v: number
}