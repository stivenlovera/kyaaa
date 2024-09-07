import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, ObjectIdColumn, ObjectId } from "typeorm";
export class Serie {
    @Column()
    nombre: string;
}