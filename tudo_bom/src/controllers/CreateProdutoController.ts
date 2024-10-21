import { Router, Request, Response } from "express";
import { CreateProduto } from "../services/createProdutoService";

const route = Router()


route.post("/create", async (req: Request, res: Response) => {

    const name = req.body.name
    const preco = req.body.preco
    
    const service = new CreateProduto()

    const produto = {

        name,
        preco,
        acabou: false

    }

    const result = await service.execute(produto)

})


export default route