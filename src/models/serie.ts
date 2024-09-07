
import { Schema } from "mongoose";
export interface ISerie {
    nombre: string
}
export const Serie = new Schema<ISerie>({
    nombre: String
});