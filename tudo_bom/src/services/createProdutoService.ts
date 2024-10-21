import { getRepository } from "typeorm";
import Produtos from "../entity/Produto";

type ProdutoEnt = {
    name: string;
    preco: number;
    acabou: boolean;
}

export class CreateProduto {
    async execute ({ name, preco, acabou }:ProdutoEnt):Promise<Produtos | Error> {
        
        const repo = getRepository(Produtos)

        const result = await repo.create ({
            name,
            preco,
            acabou
        })

        return result

    }
}