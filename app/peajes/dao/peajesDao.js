"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const peajes_1 = __importDefault(require("../../../models/peajes"));
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
class PeajesDao {
    static crear(res, objPeajes) {
        return __awaiter(this, void 0, void 0, function* () {
            this.peajesRepository.insert(objPeajes)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Peaje Registrado", respuesta: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mesaje: "fallo al crear el peaje" });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.peajesRepository.find()
                .then((respuesta) => {
                const arregloPeajes = respuesta;
                res.status(200).json(arregloPeajes);
            }).catch((miErrorcito) => {
                res.status(400).json({ mesaje: "Fallo al consultar los peajes" });
            });
        });
    }
    /*protected static async listar(res:Response): Promise<any>{
        this.peajesRepository.find()
            .then((respuesta)=>{
                const arregloPeajes = respuesta;
                arregloPeajes.map((objPeaje: Peajes)=> {
                    let nombrePrivado = objPeaje.fotoPrivadaPeaje;
                    let base64 = AdministrarImagen.cargarImagenBase64(nombrePrivado,
                        rutasImagenes.rutaFotoSistema+nombrePrivado,250);
                        objPeaje.base64Peaje= base64;

                })

                res.status(200).json(arregloPeajes);
            }).catch((miErrorsito)=>{
                res.status(400).json({mensaje:"fallo al consultar los peajes"})
            })
    }*/
    static editarPeaje(res, objPeajes) {
        return __awaiter(this, void 0, void 0, function* () {
            this.peajesRepository.update({ codPeaje: objPeajes.codPeaje }, objPeajes)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Peaje actualizado", objeto: objPeajes });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al actualizar el Peaje" });
            });
        });
    }
    static borrarPeaje(res, codPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            this.peajesRepository.delete({ codPeaje: codPeaje })
                .then((respueta) => {
                res.status(200).json({ mesaje: "Peaje eliminado", respuesta: respueta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "Fallo al eliminar el departamento" });
            });
        });
    }
}
PeajesDao.peajesRepository = conexionBD_1.default.getRepository(peajes_1.default);
exports.default = PeajesDao;
