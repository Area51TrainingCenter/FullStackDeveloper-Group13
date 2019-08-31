import * as express from "express"
import * as Joi from "@hapi/joi"
import { UsuariosSchema, validate, SeguridadSchema } from "../validators"
import { UsuariosController } from "../controllers"
import { AuthenticationSecurity } from "../securities";

const RouteUsuarios = express.Router()
const usuariosController = new UsuariosController()

RouteUsuarios.get("/", usuariosController.listar)

RouteUsuarios.get("/:id", validate(UsuariosSchema.USUARIOS_GET_SCHEMA), usuariosController.detallar)

RouteUsuarios.post("/:id", validate(SeguridadSchema.AUTENTICACION_SCHEMA), AuthenticationSecurity, validate(UsuariosSchema.USUARIOS_POST_SCHEMA), usuariosController.insertar)

RouteUsuarios.delete("/:id", validate(UsuariosSchema.USUARIOS_DELETE_SCHEMA), usuariosController.eliminar)

RouteUsuarios.put("/:id", validate(UsuariosSchema.USUARIOS_PUT_SCHEMA), usuariosController.modificar)

export default RouteUsuarios