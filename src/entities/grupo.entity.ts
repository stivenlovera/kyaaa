import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ObjectIdColumn, ObjectId } from "typeorm";

export class Grupo {

    @Column()
    nombre: string;
}