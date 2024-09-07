import { Schema } from "mongoose";
export interface IPersonaje {
    nombre: string
}
export const Personaje = new Schema<IPersonaje>({
    nombre: String
});