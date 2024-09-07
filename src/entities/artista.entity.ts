
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ObjectIdColumn, ObjectId } from "typeorm";

export class Artista {

    constructor(nombre: string, href: string, cantidad: number) {
        this.nombre = nombre
        this.href = href
        this.cantidad = cantidad
    }

    @Column()
    nombre: string;

    @Column()
    href: string;

    @Column()
    cantidad: number;
}