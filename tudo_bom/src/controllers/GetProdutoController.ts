import { Request, Response, Router} from "express"
import { GetProdutos } from "../services/getAllProdutos"

const router = Router()


router.get("/all", async (req: Request, res:Response):Promise<any | Error> => {

    const service = new GetProdutos()

    const result = await service.execute()

    if(result instanceof Error) 
    {
        return res.status(400).json(result.message)
    }

    return res.status(200).json({ error: null, result})

})


export default router