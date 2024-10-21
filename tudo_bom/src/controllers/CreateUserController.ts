import { Request, Response, Router } from "express";

import { CreateUserRepositori } from "../services/createUserService";


const router = Router()



router.post("/add", async ( req: Request, res: Response):Promise<any | Error> => {

    const  name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confirmPass = req.body.confirmPass

    if(!name || !email || !password || confirmPass ) {
        return res.status(400).json({ error: "Preencha todos os campos!"})
    }

    if(password != confirmPass) {
        return res.status(400).json({ error: "As senhas não conferem!"})
    }

    const service = new CreateUserRepositori()

    const user = {

        name,
        email,
        password,
        adim: false

    }

    const result = await service.execute(user)

    if(result instanceof Error) {
        return res.status(400).json(result.message)
    }

    try {

        return res.status(201).json({ error: null, msg: "usuario cadastrado com sucesso!", result})
        
    } catch (error) {
        res.status(400).json({error: error})
    }


} )

export default router 