"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnosControlador_1 = __importDefault(require("../controller/turnosControlador"));
class TurnosRuta {
    constructor() {
        this.apiTurnosR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiTurnosR.post("/add", turnosControlador_1.default.crearTurnos);
        this.apiTurnosR.get("/list", turnosControlador_1.default.consultarTurnos);
        this.apiTurnosR.put("/update", turnosControlador_1.default.actualizarTurnos);
        this.apiTurnosR.delete("/delete/:codTurno", turnosControlador_1.default.eliminarTurno);
        this.apiTurnosR.get("/one/:codTurno", turnosControlador_1.default.buscarTurnos);
    }
}
const turnosRuta = new TurnosRuta();
exports.default = turnosRuta.apiTurnosR;
