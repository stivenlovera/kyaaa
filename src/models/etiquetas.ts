import { Schema } from "mongoose";
export interface IEtiqueta {
    nombre: string
}
export const Etiqueta = new Schema<IEtiqueta>({
    nombre: String
});