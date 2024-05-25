"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puestosControlador_1 = __importDefault(require("../controller/puestosControlador"));
class PuestosRuta {
    constructor() {
        this.apiPuestoR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiPuestoR.post("/add", puestosControlador_1.default.crearPuesto);
        this.apiPuestoR.get("/list", puestosControlador_1.default.consultarPuesto);
        this.apiPuestoR.put("/update", puestosControlador_1.default.actualizarPuesto);
        this.apiPuestoR.delete("/delete/:codPuesto", puestosControlador_1.default.eliminarPuesto);
    }
}
const puestosRuta = new PuestosRuta();
exports.default = puestosRuta.apiPuestoR;
