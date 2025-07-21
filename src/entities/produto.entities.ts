import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("produtos")
export class Produtos {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nome: string

    @Column()
    descricao: string

    @Column({type: "int"})
    preco: number

}