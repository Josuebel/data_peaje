"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const usuario_1 = __importDefault(require("../../../models/usuario"));
class UsuariosDao {
    static crear(res, objUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuariospository.insert(objUsuario)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Usuario Registrado", respuesta: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mesaje: "fallo al crear el usuario" });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuariospository.find()
                .then((respuesta) => {
                const arregloUsuarios = respuesta;
                res.status(200).json(arregloUsuarios);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "fallo al consultar los Usuarios" });
            });
        });
    }
    static editar(res, objUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuariospository.update({ codUsuario: objUsuario.codUsuario }, objUsuario)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Usuario actualizado", objeto: objUsuario });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al actualizar el Usuario" });
            });
        });
    }
    static borrar(res, codUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuariospository.delete({ codUsuario: codUsuario })
                .then((respueta) => {
                res.status(200).json({ mesaje: "Usuario eliminado", respuesta: respueta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "Fallo al eliminar el usuario" });
            });
        });
    }
}
UsuariosDao.usuariospository = conexionBD_1.default.getRepository(usuario_1.default);
exports.default = UsuariosDao;
