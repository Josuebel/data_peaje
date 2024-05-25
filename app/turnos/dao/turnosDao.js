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
const turnos_1 = __importDefault(require("../../../models/turnos"));
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
class TurnosDao {
    static crear(res, objTurnos) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnospository.insert(objTurnos)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Turno Registrado", respuesta: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mesaje: "fallo al crear el turno" });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnospository.find()
                .then((respuesta) => {
                const arregloTuros = respuesta;
                res.status(200).json(arregloTuros);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "fallo al consultar los turnos" });
            });
        });
    }
    static editar(res, objTurnos) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnospository.update({ codTurno: objTurnos.codTurno }, objTurnos)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Turno actualizado", objeto: objTurnos });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al actualizar el Turno" });
            });
        });
    }
    static borrarTurno(res, codTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnospository.delete({ codTurno: codTurno })
                .then((respueta) => {
                res.status(200).json({ mesaje: "Turno eliminado", respuesta: respueta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "Fallo al eliminar el turno" });
            });
        });
    }
    static buscarTurnos(res, codTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnospository.findOneBy({ codTurno: codTurno })
                .then((respueta) => {
                res.status(200).json(respueta);
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "Fallo al encontar el turno" });
            });
        });
    }
}
TurnosDao.turnospository = conexionBD_1.default.getRepository(turnos_1.default);
exports.default = TurnosDao;
