"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turnosDao_1 = __importDefault(require("../dao/turnosDao"));
class TurnosControlador extends turnosDao_1.default {
    crearTurnos(req, res) {
        const objTurnos = req.body;
        TurnosControlador.crear(res, objTurnos);
    }
    consultarTurnos(req, res) {
        TurnosControlador.listar(res);
    }
    actualizarTurnos(req, res) {
        let objTurnos;
        objTurnos = req.body;
        TurnosControlador.editar(res, objTurnos);
    }
    eliminarTurno(req, res) {
        let codTurno = Number(req.params.codTurno);
        if (!isNaN(codTurno)) {
            TurnosControlador.borrarTurno(res, codTurno);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de departamento no valido " });
        }
    }
    buscarTurnos(req, res) {
        let codTurno = Number(req.params.codTurno);
        if (!isNaN(codTurno)) {
            TurnosControlador.buscarTurnos(res, codTurno);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de departamento no valido " });
        }
    }
}
const turnosControlador = new TurnosControlador();
exports.default = turnosControlador;
