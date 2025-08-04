import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn} from "typeorm";
import { Pedidos } from "./pedidos.entities";

export enum MetodoPagamento {
    CARTAO = "cartao",
    PIX = "pix",
    BOLETO = "boleto"
}

export enum StatusPagamento {
    PENDENTE = "pendente",
    CONFIRMADO = "confirmado",
    RECUSADO = "recusado"
}

@Entity("pagamentos")
export class Pagamento {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(() => Pedidos)
    @JoinColumn({ name: "pedido_id" })
    pedido: Pedidos;

    @Column({ type: "enum", enum: MetodoPagamento })
    metodo: MetodoPagamento;

    @Column({ type: "enum", enum: StatusPagamento })
    status: StatusPagamento;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    valor: number;

    @CreateDateColumn({ name: "data_pagamento", type: "timestamp" })
    data_pagamento: Date;
}