// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";
import { ITipo, Tipo } from "./tipo";
import { Grupo, IGrupo } from "./grupo";
import { ILenguaje, Lenguaje } from "./lenguaje";
import { Artista, IArtista } from "./artista";
import { IPersonaje, Personaje } from "./personaje";
import { ISerie, Serie } from "./serie";
import { IPagina, Pagina } from "./pagina";
import { Etiqueta, IEtiqueta } from "./etiquetas";
import mongoosePaginate from 'mongoose-paginate-v2'

// Defining the structure of a todo item using TypeScript interfaces
export interface IObra extends Document {
    _id?: string;
    nombre: string;
    numero_pagina: number;
    fecha_scraping: string;
    fecha: Date;
    tipo: ITipo;
    grupo: IGrupo;
    lenguaje: ILenguaje;
    url_scraping: string;
    artistas: IArtista[];
    personajes: IPersonaje[];
    series: ISerie[];
    paginas: IPagina[];
    etiquetas: IEtiqueta[];
    codigo: string;
    name: string;
    count: number;
}

export const obraSchema = new mongoose.Schema<IObra>(
    {
        nombre: {
            type: String,
            required: true,
        },
        numero_pagina: {
            type: Number,
            required: true,
        },
        fecha_scraping: {
            type: String,
            required: true,
        },
        fecha: {
            type: Date,
            required: true,
            default: Date.now
        },
        tipo: {
            type: Tipo,
            required: true,
        },
        grupo: {
            type: Grupo,
            required: true,
        },
        lenguaje: {
            type: Lenguaje,
            required: true,
        },
        url_scraping: {
            type: String,
            required: true,
        },
        artistas: {
            type: [Artista],
            required: true,
        },
        personajes: {
            type: [Personaje],
            required: true,
        },
        series: {
            type: [Serie],
            required: true,
        },
        paginas: {
            type: [Pagina],
            required: true,
        },
        etiquetas: {
            type: [Etiqueta],
            required: true,
        },
        codigo: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            required: true,
        }
    },
    {
        collection: 'obra'
    }
);

obraSchema.plugin(mongoosePaginate);
// Creating a mongoose model for the todo document
const obra: Model<IObra> =
    mongoose.models?.obra || mongoose.model<IObra>("obra", obraSchema, 'obra');

export { obra as modelObra };