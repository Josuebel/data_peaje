"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peajesControlador_1 = __importDefault(require("../controller/peajesControlador"));
class PeajeRuta {
    constructor() {
        this.apiPeajeR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiPeajeR.post("/add", peajesControlador_1.default.crearPeaje);
        this.apiPeajeR.get("/list", peajesControlador_1.default.consultarPeaje);
        this.apiPeajeR.put("/update", peajesControlador_1.default.actualizarPeaje);
        this.apiPeajeR.delete("/delete/:codPeaje", peajesControlador_1.default.eliminarPeaje);
    }
}
const peajeRuta = new PeajeRuta();
exports.default = peajeRuta.apiPeajeR;
