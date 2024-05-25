"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turnosUsuDao_1 = __importDefault(require("../dao/turnosUsuDao"));
class TurnosUsuariosControlador extends turnosUsuDao_1.default {
    crearTurnosUsuario(req, res) {
        const objTurnosUsuario = req.body;
        TurnosUsuariosControlador.crear(res, objTurnosUsuario);
    }
    consultarTurnosUsuario(req, res) {
        TurnosUsuariosControlador.listar(res);
    }
    eliminarTurnosUsuario(req, res) {
        let codUsuario = Number(req.params.codUsuario);
        let codPuesto = Number(req.params.codPuesto);
        let codTurno = Number(req.params.codTurno);
        if (!isNaN(codUsuario) || !isNaN(codPuesto) || !isNaN(codTurno)) {
            TurnosUsuariosControlador.borrar(res, codUsuario, codPuesto, codTurno);
        }
        else {
            res.status(400).json({ mensaje: "Codigo no valido " });
        }
    }
}
const turnosusuarioControlador = new TurnosUsuariosControlador();
exports.default = turnosusuarioControlador;
