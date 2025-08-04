import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Categoria } from "./categoria.entities";

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

    @ManyToOne(() => Categoria, categoria => categoria.produtos)
    @JoinColumn({ name: "categoria_id" })
    categoria: Categoria;

    @Column({ type: "text" })
    imagem_url: string;
}
