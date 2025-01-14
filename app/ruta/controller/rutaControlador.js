"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rutaDao_1 = __importDefault(require("../dao/rutaDao"));
class RutaControlador extends rutaDao_1.default {
    crearRuta(req, res) {
        let objRutas;
        objRutas = req.body;
        RutaControlador.agregarRuta(res, objRutas);
    }
    listaRutas(req, res) {
        RutaControlador.obtenerRutas(res);
    }
    actualizarRutas(req, res) {
        let objRutas;
        objRutas = req.body;
        RutaControlador.editarRuta(res, objRutas);
    }
    eliminarRutas(req, res) {
        let codRuta = Number(req.params.codRuta);
        if (!isNaN(codRuta)) {
            RutaControlador.borrarRuta(res, codRuta);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de ruta no valido " });
        }
    }
    buscarRuta(req, res) {
        let codRuta = Number(req.params.codRuta);
        if (!isNaN(codRuta)) {
            RutaControlador.buscarRuta(res, codRuta);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de departamento no valido " });
        }
    }
}
const rutaControlador = new RutaControlador();
exports.default = rutaControlador;
