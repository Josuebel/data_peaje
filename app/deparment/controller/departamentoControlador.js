"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departamentoDao_1 = __importDefault(require("../dao/departamentoDao"));
class DepartamentoControlador extends departamentoDao_1.default {
    crearDepartamento(req, res) {
        console.log(req.body);
        let objDepartamento = req.body;
        DepartamentoControlador.agregarDepartamento(res, objDepartamento);
    }
    listaDepartamentos(req, res) {
        DepartamentoControlador.obtenerDepartamentos(res);
    }
    actualizarDepartamentos(req, res) {
        let objDepartamento;
        objDepartamento = req.body;
        DepartamentoControlador.editarDepartamento(res, objDepartamento);
    }
    eliminarDepartamentos(req, res) {
        let codDepartamento = Number(req.params.codDepartamento);
        if (!isNaN(codDepartamento)) {
            DepartamentoControlador.borrarDepartamento(res, codDepartamento);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de departamento no valido " });
        }
    }
    buscarDepartamentos(req, res) {
        let codDepartamento = Number(req.params.codDepartamento);
        if (!isNaN(codDepartamento)) {
            DepartamentoControlador.buscarDepartamento(res, codDepartamento);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de departamento no valido " });
        }
    }
}
const departamentoControlador = new DepartamentoControlador();
exports.default = departamentoControlador;
