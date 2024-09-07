import { Schema } from "mongoose";
export interface ITipo {
    nombre: string
}
export const Tipo = new Schema<ITipo>({
    nombre: String
});