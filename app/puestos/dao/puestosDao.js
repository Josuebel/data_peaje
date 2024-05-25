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
const puestos_1 = __importDefault(require("../../../models/puestos"));
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
class PuestosDao {
    static crear(res, objPuestos) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestosRepository.insert(objPuestos)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Puesto Registrado", respuesta: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mesaje: "fallo al crear el Puesto" });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestosRepository.find()
                .then((respuesta) => {
                const arregloPuestos = respuesta;
                res.status(200).json(arregloPuestos);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "fallo al consultar los puestos" });
            });
        });
    }
    static editarPuestos(res, objPuestos) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestosRepository.update({ codPuesto: objPuestos.codPuesto }, objPuestos)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Puesto actualizado", objeto: objPuestos });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al actualizar el puesto" });
            });
        });
    }
    static borrarPuesto(res, codPuesto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestosRepository.delete({ codPuesto: codPuesto })
                .then((respueta) => {
                res.status(200).json({ mesaje: "Puesto eliminado", respuesta: respueta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "Fallo al eliminar el departamento Puesto" });
            });
        });
    }
}
PuestosDao.puestosRepository = conexionBD_1.default.getRepository(puestos_1.default);
exports.default = PuestosDao;
