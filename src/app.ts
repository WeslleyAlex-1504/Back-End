import 'express-async-errors'
import "dotenv/config"
import express, { Application } from "express"
import { handleErrors } from "./errors"
import cors from "cors"
import { loginRoutes } from './routes/login.routes'
import { usuariosRoutes } from './routes/user.routes'
import { produtosRoutes } from './routes/produto.route'
import { vendasRoutes } from './routes/venda.routes'
const app:Application = express()

app.use(express.json())
app.use(cors())
app.use("/venda", vendasRoutes)
app.use("/login", loginRoutes)
app.use("/produto", produtosRoutes)
app.use("/usuarios", usuariosRoutes)

app.use(handleErrors)
export default app