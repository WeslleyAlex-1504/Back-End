import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Produtos } from "./produto.entities";

@Entity("categorias")
export class Categoria {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 50 })
    nome: string;

    @OneToMany(() => Produtos, produto => produto.categoria)
    produtos: Produtos[];
}