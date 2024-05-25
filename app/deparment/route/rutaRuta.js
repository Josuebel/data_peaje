"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutaControlador_1 = __importDefault(require("../controller/rutaControlador"));
class RutaRuta {
    constructor() {
        this.apiRutaRuta = (0, express_1.Router)();
        this.cargarRuta();
    }
    cargarRuta() {
        this.apiRutaRuta.post("/add", rutaControlador_1.default.crearRuta);
        this.apiRutaRuta.get("/list", rutaControlador_1.default.listaRutas);
        this.apiRutaRuta.put("/update", rutaControlador_1.default.actualizarRutas);
        this.apiRutaRuta.delete("/delete/:codRuta", rutaControlador_1.default.eliminarRutas);
    }
}
const rutaRuta = new RutaRuta();
exports.default = rutaRuta.apiRutaRuta;
