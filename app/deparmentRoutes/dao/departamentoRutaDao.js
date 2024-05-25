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
const departamentos_rutas_1 = __importDefault(require("../../../models/departamentos_rutas"));
class DepartamentoRutaDao {
    static crear(res, objDepaRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.insert(objDepaRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Departamento Ruta Registrado", respuesta: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mesaje: "fallo al crear el departamento rutas" });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.find()
                .then((respuesta) => {
                const arregloDepaRuta = respuesta;
                res.status(200).json(arregloDepaRuta);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "fallo al consultar los datos" });
            });
        });
    }
    static editarDepartamentoRuta(res, objDepaRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.update({ codDepartamento: objDepaRuta.codDepartamento }, objDepaRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "departamento ruta actualizado", objeto: objDepaRuta });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al actualizar el departamento ruta" });
            });
        });
    }
    static borrar(res, codRuta, codDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.delete({ codRuta: codRuta, codDepartamento: codDepartamento })
                .then((respueta) => {
                res.status(200).json({ mesaje: "Departamento Ruta eliminado", respuesta: respueta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "Fallo al eliminar el Departamento Ruta" });
            });
        });
    }
}
DepartamentoRutaDao.departamentoRutaRepository = conexionBD_1.default.getRepository(departamentos_rutas_1.default);
exports.default = DepartamentoRutaDao;
