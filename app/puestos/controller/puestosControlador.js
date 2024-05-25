"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puestosDao_1 = __importDefault(require("../dao/puestosDao"));
class PuestosControlador extends puestosDao_1.default {
    crearPuesto(req, res) {
        const objPuestos = req.body;
        PuestosControlador.crear(res, objPuestos);
    }
    consultarPuesto(req, res) {
        PuestosControlador.listar(res);
    }
    actualizarPuesto(req, res) {
        let objPuestos;
        objPuestos = req.body;
        PuestosControlador.editarPuestos(res, objPuestos);
    }
    eliminarPuesto(req, res) {
        let codPuesto = Number(req.params.codPuesto);
        if (!isNaN(codPuesto)) {
            PuestosControlador.borrarPuesto(res, codPuesto);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de peaje no valido " });
        }
    }
}
const puestosControlador = new PuestosControlador();
exports.default = puestosControlador;
