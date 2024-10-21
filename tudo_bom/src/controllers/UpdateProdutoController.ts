import { Request, Response, Router } from "express";
import { UpdadeService } from "../services/UpdateProdutoService"
import { promises } from "dns";

const router = Router()
router.post("/update/:id", async (req: Request, res: Response):Promise<any | Error> => {

    const id = req.params.id
    const name = req.body.name
    const preco = req.body.preco
    const acabou = req.body.acabou

    const service = new UpdadeService()

    const produto = {

        id,
        name,
        preco,
        acabou

    }

    const result = await service.execute(produto)

    if(result instanceof Error) {
        return res.status(400).json(result.message)
    }

    return res.status(400).json({ error: null, msg: "Produto atualizado com sucesso!", result})


})

export default router