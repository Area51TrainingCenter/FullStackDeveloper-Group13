import GenericoController from "./generico.controller";
import User from "../models/user.model"

class UsuariosController extends GenericoController {
	constructor() {
		super(User);
	}
}

export default UsuariosController