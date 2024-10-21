import { Router } from "express";
import CreateUserController from "../controllers/CreateUserController";
import LoginuserController from "../controllers/LoginUserController"

//PRODUTOS
import CreateProdutoController from "../controllers/CreateProdutoController"
import GetProdutoController from "../controllers/GetProdutoController"
import ProdutoId from "../controllers/ProdutoIdController"
import  UPdateProdutoController from "../controllers/UpdateProdutoController"



const route = Router();

//ROTAS DE USUARIOS!
route.use("/user", CreateUserController)
route.use("/user", LoginuserController)


//ROTAS DOS PRODUTOS!
route.use("/produto", CreateProdutoController)
route.use("/produto", GetProdutoController)
route.use("/produto", ProdutoId)
route.use("/produto", UPdateProdutoController)
export default route