import { getRepository } from "typeorm";
import User from "../entity/User";

type userLogin = {
    email: string;
    password: string;
}

export class LoginUser {
    async execute ({email, password}: userLogin): Promise<User | Error> {

        const repo = getRepository(User);

        const checkUser = await repo.findOneBy({email})

        if(!checkUser) {
            return new Error ("Este useario não foi encontrado! ")
        }

        return checkUser

         
    }
}