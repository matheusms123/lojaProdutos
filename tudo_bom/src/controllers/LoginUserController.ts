import { Request, Response, Router } from "express";
import { LoginUser } from "../services/LoginUserService";


const route = Router()

route.post("/login", async( req: Request, res: Response):Promise<any> => {

    const email = req.body.email
    const password = req.body.password

    if(!email || !password) {
        return res.status(400).json({ error: "Preencha todos os dados!"})
    }

    const user = {
        email,
        password
    }

    const service = new LoginUser()

    const result = service.execute(user)

    if(result instanceof Error) {
        return res.status(400).json(result.message)
    }

    return res.status(200).json({ error: null, msg: "logado"})


})

export default route