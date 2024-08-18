import "reflect-metadata";

import { DataSource } from "typeorm";
import { Artista } from "../entities/artista.entity";
import { PageArtista } from "../entities/pageArtista.entity";
import { Serie } from "../entities/serie.entity";
import { Etiqueta } from "../entities/etiqueta.entity";
import { Grupo } from "../entities/grupo.entity";
import { Lenguaje } from "../entities/lenguaje.entity";
import { Obra } from "../entities/obra.entity";
import { Pagina } from "../entities/pagina.entity";
import { Personaje } from "../entities/personaje.entity";
import { Tipo } from "../entities/tipo.entity";
import 'dotenv/config'
import { Group } from "@/entities/group.entity";

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "scraping",
    synchronize: false,
    //logging: true,
    entities: [
        Artista,
        PageArtista,
        Etiqueta,
        Grupo,
        Lenguaje,
        Obra,
        Pagina,
        Personaje,
        Tipo,
        Serie,
        Group
    ],
    subscribers: [],
    migrations: [],
})
