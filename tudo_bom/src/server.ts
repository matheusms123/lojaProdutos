import 'reflect-metadata'

import { AppDataSource } from './database/data-source'

import express from 'express'

import cors from 'cors'
import route  from './routers/routes';

const app = express();

app.use(cors())
app.use(express.json())

app.use(route)


AppDataSource.initialize().then(() => {
    console.log("Está on-line")

    app.listen(3002, () => {
        console.log("Está on-line!")
    })
})