"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuariosDao_1 = __importDefault(require("../dao/usuariosDao"));
class UsuariosControlador extends usuariosDao_1.default {
    crearUsuario(req, res) {
        const objUsuario = req.body;
        UsuariosControlador.crear(res, objUsuario);
    }
    consultarUsuario(req, res) {
        UsuariosControlador.listar(res);
    }
    actualizarUsuario(req, res) {
        let objUsuario;
        objUsuario = req.body;
        UsuariosControlador.editar(res, objUsuario);
    }
    eliminarUsuario(req, res) {
        let codUsuario = Number(req.params.codUsuario);
        if (!isNaN(codUsuario)) {
            UsuariosControlador.borrar(res, codUsuario);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de usuario no valido " });
        }
    }
}
const usuariosControlador = new UsuariosControlador();
exports.default = usuariosControlador;
