"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departamentoRutaDao_1 = __importDefault(require("../dao/departamentoRutaDao"));
class DepartamentoRutaControlador extends departamentoRutaDao_1.default {
    crearDepartamentoRuta(req, res) {
        const objDepaRuta = req.body;
        DepartamentoRutaControlador.crear(res, objDepaRuta);
    }
    consultarDepartamentoRuta(req, res) {
        DepartamentoRutaControlador.listar(res);
    }
    actualizarDepartamentoRuta(req, res) {
        let objDepaRuta;
        objDepaRuta = req.body;
        DepartamentoRutaControlador.editarDepartamentoRuta(res, objDepaRuta);
    }
    eliminarDepartamentoRuta(req, res) {
        let codRuta = Number(req.params.codRuta);
        let codDepartamento = Number(req.params.codDepartamento);
        if (!isNaN(codRuta) || !isNaN(codDepartamento)) {
            DepartamentoRutaControlador.borrar(res, codRuta, codDepartamento);
        }
        else {
            res.status(400).json({ mensaje: "Codigo no valido " });
        }
    }
}
const departamentoRutaControlador = new DepartamentoRutaControlador();
exports.default = departamentoRutaControlador;
