import { Repository } from "typeorm";
import { loginReturnSchemas, loginUser, returnLogin } from "../../schemas/login.schemas";
import { AppDataSource } from "../../data-source";
import { Usuarios } from "../../entities/usuarios.entities";
import { AppError } from "../../errors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const loginServices = async(user:loginUser):Promise<any> => {
    const userRepository: Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser: Usuarios | null = await userRepository.findOne({
        where:{
            name: user.name
        }
    })

    if(!findUser){
        throw new AppError("usuario não encontrado")
    }

        const validador = bcrypt.compare(user.password, findUser.password)

    if(!validador){
        throw new AppError("senha ou e-mail incorreto",409)
    }
    const token = jwt.sign({
        id:findUser.id,name:findUser.name
    },
    process.env.secret_key!,
{
    expiresIn:"24h",
    subject:String(findUser.id)
})

    const user2 = loginReturnSchemas.parse({user:findUser,token})
    return user2
}