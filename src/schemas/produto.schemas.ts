import z from "zod";

export const produtoSchema = z.object ({
    nome: z.string(),
    descricao: z.string(),
    preco: z.number()
})
export const returnProdutoSchema = produtoSchema.extend({
    id: z.number()
})

export type creteProduto = z.infer<typeof produtoSchema>
export type returnProduto = z.infer<typeof returnProdutoSchema>

