import { getRepository } from "typeorm"
import User from "../entity/User"

type userReposi = {
    name: string;
    email: string;
    password: string;
    adim: Boolean
}

export class CreateUserRepositori{

    async execute ({name, email, password, adim}:userReposi):Promise<User | Error> {
        
        const repo =  getRepository(User)

        if( await repo.findOneBy({email}) ){
            return new Error("Este usuario já está cadastrado!")
        }

        const user = await repo.create({
            name,
            email,
            password,
            adim: false
        })

        return user

    }

}