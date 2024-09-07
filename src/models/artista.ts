import { Schema } from "mongoose";
export interface IArtista {
    nombre: string
}
export const Artista = new Schema<IArtista>({
    nombre: String
});