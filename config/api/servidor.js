"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
//aca van los imports de las rutas 
const departamentoRuta_1 = __importDefault(require("../../app/deparment/route/departamentoRuta"));
const rutaRuta_1 = __importDefault(require("../../app/ruta/route/rutaRuta"));
const seguridad_1 = __importDefault(require("../../middleware/seguridad"));
const accesoRuta_1 = __importDefault(require("../../app/access/route/accesoRuta"));
const departamentoRutaRuta_1 = __importDefault(require("../../app/deparmentRoutes/route/departamentoRutaRuta"));
const peajesRuta_1 = __importDefault(require("../../app/peajes/route/peajesRuta"));
const puestosRuta_1 = __importDefault(require("../../app/puestos/route/puestosRuta"));
const registroRuta_1 = __importDefault(require("../../app/register/route/registroRuta"));
const turnosRuta_1 = __importDefault(require("../../app/turnos/route/turnosRuta"));
//import apiUsuariosR from'../../app/usuarios/route/usuariosRuta'
const turnosUsuRuta_1 = __importDefault(require("../../app/turnosUsu/route/turnosUsuRuta"));
class Servidor {
    ///////////////////////////////////////se agrega esto
    constructor() {
        this.app = (0, express_1.default)();
        this.cargarConfiguracion();
        this.cargarRutas();
    }
    //////////////////////////////////////
    cargarConfiguracion() {
        this.app.set("PORT", 3300);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    //////////////////////////////////// se agrega esto
    cargarRutas() {
        this.app.use("/api/public/access", accesoRuta_1.default);
        this.app.use("/api/public/register", registroRuta_1.default);
        //privadas 
        this.app.use("/api/private/departament", seguridad_1.default.verificarToken, departamentoRuta_1.default);
        this.app.use("/api/private/ruta", seguridad_1.default.verificarToken, rutaRuta_1.default);
        this.app.use("/api/private/deparmentRoutes", seguridad_1.default.verificarToken, departamentoRutaRuta_1.default);
        this.app.use("/api/private/peajes", seguridad_1.default.verificarToken, peajesRuta_1.default);
        this.app.use("/api/private/puesto", seguridad_1.default.verificarToken, puestosRuta_1.default);
        this.app.use("/api/private/turnos", seguridad_1.default.verificarToken, turnosRuta_1.default);
        this.app.use("/api/private/turnousu", seguridad_1.default.verificarToken, turnosUsuRuta_1.default);
    }
    /////////////////////////////////////
    //______________________________________
    iniciarServidor() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor funcionando en el puerto :", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
