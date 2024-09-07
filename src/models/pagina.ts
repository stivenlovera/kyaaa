
import { Schema } from "mongoose";
export interface IPagina {
    nombre: string
    numero: number,
    url_original: string,
    url_small: string,
    url_medio: string,
    url_big: string,
    url_scraping: string,
    data_scraping: string,
}
export const Pagina = new Schema<IPagina>({
    nombre: String,
    numero: Number,
    url_original: String,
    url_small: String,
    url_medio: String,
    url_big: String,
    url_scraping: String,
    data_scraping: String,
});