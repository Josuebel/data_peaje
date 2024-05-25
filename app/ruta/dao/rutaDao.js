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
const rutas_1 = __importDefault(require("../../../models/rutas"));
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
class RutaDao {
    static agregarRuta(res, objRutas) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutasRepository.insert(objRutas)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "ruta guardada", objeto: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al insertar la ruta" });
            });
        });
    }
    static obtenerRutas(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutasRepository.find()
                .then((respuesta) => {
                const arregloRutas = respuesta;
                res.status(200).json(arregloRutas);
            }).catch((miErrorcito) => {
                res.status(400).json({ mesaje: "Fallo al consultar las rutas" });
            });
        });
    }
    static editarRuta(res, objRutas) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutasRepository.update({ codRuta: objRutas.codRuta }, objRutas)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "ruta actualizada", objeto: objRutas });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al actualizar la ruta" });
            });
        });
    }
    static borrarRuta(res, codRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutasRepository.delete({ codRuta: codRuta })
                .then((respueta) => {
                res.status(200).json({ mesaje: "Ruta eliminada", respuesta: respueta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "Fallo al eliminar la ruta" });
            });
        });
    }
    static buscarRuta(res, codRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutasRepository.findOneBy({ codRuta: codRuta })
                .then((respueta) => {
                res.status(200).json(respueta);
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "Fallo al encontar el Ruta" });
            });
        });
    }
}
RutaDao.rutasRepository = conexionBD_1.default.getRepository(rutas_1.default);
exports.default = RutaDao;
