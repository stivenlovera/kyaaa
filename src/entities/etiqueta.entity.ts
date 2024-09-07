import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ObjectIdColumn, ObjectId } from "typeorm";

export class Etiqueta {
    @Column()
    nombre: string;
}