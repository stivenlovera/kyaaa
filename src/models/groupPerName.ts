import { Schema } from "mongoose";
export interface IGroupPerName {
    _id: string
    name: string
    count: number
}
export const GroupPerName = new Schema<IGroupPerName>({
    _id: String,
    name: String,
    count: Number
});