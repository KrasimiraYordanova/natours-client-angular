import { ITour } from "./tour";
import { IUser } from "./user";

export interface IReview {
    review: string, 
    rating: number,
    tour: ITour,
    user: IUser
}