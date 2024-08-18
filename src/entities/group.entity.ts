import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ObjectIdColumn, ObjectId } from "typeorm";

@Entity()
export class Group {
    @ObjectIdColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    count: number;
}