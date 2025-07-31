
import { DeepPartial } from "typeorm";
import z, { array } from "zod";
import { returnProdutoSchema } from "./produto.schemas";

export const vendaSchema = z.object ({
    quantidade: z.number(),
    lucro: z.number(),
    produtoId: z.number()
})

export const vendaReturnSchema = z.object ({
    quantidade: z.number(),
    lucro: z.number(),
    Produto: returnProdutoSchema.omit({ url: true })
})

export const vendasReturnSchema = z.object({
    quantidade: z.number(),
    lucro: z.number(),
    produtoId: z.number(),
    id: z.number(),
    Produto: returnProdutoSchema.omit({ url: true })
})

export const updateVendaSchema = vendaSchema.partial()
export const vendasArraySchema = vendasReturnSchema.array()

export type venda = z.infer<typeof vendaSchema>
export type vendaReturn = z.infer<typeof vendaReturnSchema>
export type vendasReturn = z.infer<typeof vendasArraySchema>
export type iUpdateVenda = DeepPartial<venda>