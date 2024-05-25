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
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const turnos_usuarios_1 = __importDefault(require("../../../models/turnos_usuarios"));
class TurnosUsuarioDao {
    static crear(res, objTurUsu) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnosUsuariospository.insert(objTurUsu)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Turno usuario Registrado", respuesta: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mesaje: "fallo al crear el turno usuario" });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnosUsuariospository.find()
                .then((respuesta) => {
                const arregloTurnoUsuarios = respuesta;
                res.status(200).json(arregloTurnoUsuarios);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "fallo al consultar los Turnos Usuarios" });
            });
        });
    }
    static borrar(res, codUsuario, codPuesto, codTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnosUsuariospository.delete({ codUsuario: codUsuario, codPuesto: codPuesto, codTurno: codTurno })
                .then((respueta) => {
                res.status(200).json({ mesaje: "Turno Usuario eliminado", respuesta: respueta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "Fallo al eliminar el Turno usuario" });
            });
        });
    }
}
TurnosUsuarioDao.turnosUsuariospository = conexionBD_1.default.getRepository(turnos_usuarios_1.default);
exports.default = TurnosUsuarioDao;
