import {z} from "zod"
import { returnClienteSchema } from "./cliente.schema"

export const clienteLoginSchema = z.object({
    email: z.string().email(),
    password:z.string()
})
export const returnClienteLoginSchema = z.object({
    usuario:returnClienteSchema,
    token:z.string()
})

export type iClienteLogin = z.infer<typeof clienteLoginSchema>
export type iRetunrClienteLogin = z.infer<typeof returnClienteLoginSchema>