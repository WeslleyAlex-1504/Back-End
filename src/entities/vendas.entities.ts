import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produtos } from "./produto.entities";

@Entity("vendas")
export class Vendas {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({type: "int"})
    quantidade: number

    @Column({type: "int"})
    lucro: number

    @CreateDateColumn({type:"date"})
    data_venda: string

    @ManyToOne(()=> Produtos, { eager: true })
    Produto:Produtos
    
    @Column({type: "int"})
    produtoId: number;
}