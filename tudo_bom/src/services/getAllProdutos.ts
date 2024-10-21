import { getRepository } from "typeorm";
import Produtos from "../entity/Produto";

export class GetProdutos {
    async execute ():Promise<any | Error> {

        const repo = getRepository(Produtos)

        const produtos = await repo.find()

        if(!produtos) {
            return Error("Nenhum produto foi encontrado!")
        }

        return produtos

    }
}