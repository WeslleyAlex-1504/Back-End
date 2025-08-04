import { DeepPartial } from "typeorm"
import {z} from "zod"

export const createClienteSchema = z.object({
    name: z.string().min(2,"nome é obrigatório"),
    email: z.string().email(),
    password: z.string()
})

export const returnClienteSchema = createClienteSchema.extend({
    id: z.number()
}).omit({password:true})

export const returnAllClienteSchema = returnClienteSchema.array()
export const updateClienteSchema = createClienteSchema.partial()

export type CreateCliente = z.infer<typeof createClienteSchema>
export type ReturnCliente = z.infer<typeof returnClienteSchema>
export type ReturnClientes = z.infer<typeof returnAllClienteSchema>
export type updateCliente = DeepPartial<CreateCliente>