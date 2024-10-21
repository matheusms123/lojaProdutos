import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserTable1729038615164 } from "../migration/1729038615164-UserTable"
import { Produto1729300732732 } from "../migration/1729300732732-produto"
import User from "../entity/User"
import Produto from "../entity/Produto"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Ms@122015",
    database: "tudo_bom",
    synchronize: true,
    logging: false,
    entities: [User, Produto],
    migrations: [UserTable1729038615164, Produto1729300732732],
    subscribers: [],
})
