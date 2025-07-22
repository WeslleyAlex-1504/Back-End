import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import {  CreateUser, returnUser, returnUserSchema } from "../../schemas/usuarios.schemas"
import { AppError } from "../../errors"
import bcrypt from "bcryptjs";
import { Usuarios } from "../../entities/usuarios.entities";

export const createUserService=async(userData:CreateUser):Promise<returnUser>=>{
    const userRepository: Repository<Usuarios> = AppDataSource.getRepository(Usuarios)
    
    const findUser: Usuarios | null = await userRepository.findOne({
        where:{
            name:userData.name
        },
        
    })
    if(findUser){
        throw new AppError("usuario já existe",409)
    }
    console.log(userData,"dentro do ser")
    const salt =  bcrypt.genSaltSync(10);
    const hash =  bcrypt.hashSync(userData.password, salt);
    userData.password = hash
    const createUser = userRepository.create(userData)
    await userRepository.save(createUser)
    const user = returnUserSchema.parse(createUser)
    return user

}