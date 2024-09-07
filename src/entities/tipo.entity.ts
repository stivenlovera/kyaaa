import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ObjectId, ObjectIdColumn } from "typeorm";

export class Tipo {
    @Column()
    nombre: string;
}