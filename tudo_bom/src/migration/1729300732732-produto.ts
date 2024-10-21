import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Produto1729300732732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Produtos",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        generationStrategy:"increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    }
                    ,
                    {
                        name: "preco",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "acabou",
                        type: "boolean",
                        default: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Produtos")
    }

}
