import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ObjectId, ObjectIdColumn } from "typeorm";

export class Personaje {
    @Column()
    nombre: string;
}