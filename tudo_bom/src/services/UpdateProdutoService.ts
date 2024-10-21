import { getRepository } from "typeorm";
import Produtos from "../entity/Produto";

type UpdadeProduto = {
    id: string;
    name?: string;
    preco?: number;
    acabou?: boolean;
}

export class UpdadeService {
    async execute({ id, name, preco, acabou }: UpdadeProduto): Promise<any | Error> {

        const repo = getRepository(Produtos)

        const category = await repo.findOneById(id)

        if (!category) {
            return new Error("Está categoria não existe!")
        }


        category.name = name ? name : category.name,
        category.preco = preco ? preco : category.preco
        category.acabou = acabou ? acabou : category.acabou


        await repo.save(category)

        return category



    }
}