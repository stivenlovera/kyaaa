import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ObjectId, ObjectIdColumn } from "typeorm";
 
export class Lenguaje {

    @Column()
    nombre: string;
}