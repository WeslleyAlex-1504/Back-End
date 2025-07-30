import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("despesas")
export class Despesas {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nome: string

    @Column({type: "int"})
    valor: number

    @Column()
    mes: string

    @Column({type: "int"})
    ano: number

}