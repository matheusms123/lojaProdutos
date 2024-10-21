import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserTable1729038615164 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        generationStrategy: "increment"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "adim",
                        type: "boolean",
                        default: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("userrs")
    }

}
