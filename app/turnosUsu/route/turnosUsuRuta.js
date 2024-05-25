"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnosUsuControlador_1 = __importDefault(require("../controller/turnosUsuControlador"));
class UsuariosRuta {
    constructor() {
        this.apiTurnosUsu = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiTurnosUsu.post("/add", turnosUsuControlador_1.default.crearTurnosUsuario);
        this.apiTurnosUsu.get("/list", turnosUsuControlador_1.default.consultarTurnosUsuario);
        this.apiTurnosUsu.delete("/delete/:codUsuario/:codPuesto/:codTurno", turnosUsuControlador_1.default.eliminarTurnosUsuario);
    }
}
const usuariosRuta = new UsuariosRuta();
exports.default = usuariosRuta.apiTurnosUsu;
