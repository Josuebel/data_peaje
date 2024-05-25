"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const peajesDao_1 = __importDefault(require("../dao/peajesDao"));
//import rutasImagenes from "../../../config/domain/var_imagenes";
//import { nanoid } from "nanoid";
//import AdministrarImagen from "../../../config/utilities/administarImagenes";
class PeajesControlador extends peajesDao_1.default {
    crearPeaje(req, res) {
        const objPeajes = req.body;
        PeajesControlador.crear(res, objPeajes);
        //let tipoImagen=objPeajes.fotoPublicaPeaje.split('.')[1];
        /* lafotopublica.jpg*/
        //let nombreFotoPrivada= 'IMG_'+nanoid(15)+'.'+tipoImagen; 
        //objPeajes.fotoPrivadaPeaje = nombreFotoPrivada;
        //let rutaAlmacenamiento= rutasImagenes.rutaFotoSistema;
        // AdministrarImagen.crearImagen(nombreFotoPrivada,objPeajes.base64Peaje,rutaAlmacenamiento)
    }
    consultarPeaje(req, res) {
        PeajesControlador.listar(res);
    }
    actualizarPeaje(req, res) {
        let objPeajes;
        objPeajes = req.body;
        PeajesControlador.editarPeaje(res, objPeajes);
    }
    eliminarPeaje(req, res) {
        let codPeaje = Number(req.params.codPeaje);
        if (!isNaN(codPeaje)) {
            PeajesControlador.borrarPeaje(res, codPeaje);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de peaje no valido " });
        }
    }
}
const peajesControlador = new PeajesControlador();
exports.default = peajesControlador;
