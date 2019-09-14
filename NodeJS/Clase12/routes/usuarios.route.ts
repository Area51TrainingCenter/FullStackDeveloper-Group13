import * as express from "express"
import * as Joi from "@hapi/joi"
import { UsuariosSchema, validate, SeguridadSchema } from "../validators"
import { UsuariosController } from "../controllers"
import { AuthenticationSecurity } from "../securities";
import { catchAsync } from "../handlers/errors.handler";

const RouteUsuarios = express.Router()
const usuariosController = new UsuariosController()

RouteUsuarios.get("/", AuthenticationSecurity, catchAsync(usuariosController.listar))

RouteUsuarios.get("/:_id", usuariosController.detallar)

RouteUsuarios.post("/", validate(UsuariosSchema.USUARIOS_POST_SCHEMA), usuariosController.insertar)

RouteUsuarios.delete("/:_id", usuariosController.eliminar)

RouteUsuarios.put("/:_id", usuariosController.modificar)

export default RouteUsuarios