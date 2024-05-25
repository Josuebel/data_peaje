"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registroDao_1 = __importDefault(require("../dao/registroDao"));
const nanoid_1 = require("nanoid");
class RegistroControlador extends registroDao_1.default {
    registrarUsuario(req, res) {
        let objUsuario = req.body;
        let objAcceso = req.body;
        objUsuario.identificacionUsuario = 'DOC_' + (0, nanoid_1.nanoid)(10);
        objUsuario.rolUsuario = 'Empleado';
        RegistroControlador.nuevoUsuario(res, objUsuario, objAcceso);
    }
    listarUsuarios(req, res) {
        RegistroControlador.obtenerUsuarios(res);
    }
    eliminarUsuario(req, res) {
        let codUsuario = Number(req.params.codUsuario);
        if (!isNaN(codUsuario)) {
            RegistroControlador.borrarUsuario(res, codUsuario);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de usuario no valido " });
        }
    }
}
const registroControlador = new RegistroControlador();
exports.default = registroControlador;
