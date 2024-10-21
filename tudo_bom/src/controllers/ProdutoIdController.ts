import { Request, Response, Router } from "express";
import {ProdutoId} from "../services/GetProdutoIdService"

const router = Router()


router.get("/:id", async (req: Request, res: Response): Promise<any | Error> => {

    const id = req.params.id

    const service = new ProdutoId()

    const result = await service.execute(id)

    if(result instanceof Error ) {
        return res.status(400).json(result.message)
    }

    return result

})

export default router