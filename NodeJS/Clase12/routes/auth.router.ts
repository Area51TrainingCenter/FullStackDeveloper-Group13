import * as express from "express"
import { AuthController } from "../controllers/auth.controller";

const RouteAuth = express.Router()
const controller = new AuthController()

RouteAuth.post("/", controller.login)

export default RouteAuth