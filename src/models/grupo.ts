import { Schema } from "mongoose";
export interface IGrupo {
    nombre: string
}
export const Grupo = new Schema<IGrupo>({
    nombre: String
});