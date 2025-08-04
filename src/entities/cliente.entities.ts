import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity("clientes")
export class Clientes {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 100 })
    nome: string;

    @Column({ type: "varchar", length: 100, unique: true })
    email: string;

    @Column()
    password: string;
}