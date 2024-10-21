import { getRepository } from "typeorm";
import Produtos from "../entity/Produto";

export class ProdutoId {
    async execute (id:any):Promise<any | Error> {

        const repo = await getRepository(Produtos)

        const produto = await repo.findOneById(id)

        if(!produto) {
            return Error("Produto não listado!")
        }

        return produto

    }
}