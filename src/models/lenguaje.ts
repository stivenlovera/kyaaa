
import { Schema } from "mongoose";
export interface ILenguaje {
    nombre: string
}
export const Lenguaje = new Schema<ILenguaje>({
    nombre: String
});