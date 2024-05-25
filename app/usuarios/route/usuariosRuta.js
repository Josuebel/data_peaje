"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosControlador_1 = __importDefault(require("../controller/usuariosControlador"));
class UsuariosRuta {
    constructor() {
        this.apiUsuariosR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiUsuariosR.post("/add", usuariosControlador_1.default.crearUsuario);
        this.apiUsuariosR.get("/list", usuariosControlador_1.default.consultarUsuario);
        this.apiUsuariosR.put("/update", usuariosControlador_1.default.actualizarUsuario);
        this.apiUsuariosR.delete("/delete/:codUsuario", usuariosControlador_1.default.eliminarUsuario);
    }
}
const usuariosRuta = new UsuariosRuta();
exports.default = usuariosRuta.apiUsuariosR;
