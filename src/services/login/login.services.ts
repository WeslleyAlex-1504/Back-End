import { Repository } from "typeorm";
import { loginUser, returnLogin } from "../../schemas/login.schemas";
import { AppDataSource } from "../../data-source";
import { Usuarios } from "../../entities/usuarios.entities";
import { AppError } from "../../errors";

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



    
    // return user
}