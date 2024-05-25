"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
////////////////////////////////////////////////////se agrega esto
const departamento_1 = __importDefault(require("../../models/departamento"));
const rutas_1 = __importDefault(require("../../models/rutas"));
const departamentos_rutas_1 = __importDefault(require("../../models/departamentos_rutas"));
const peajes_1 = __importDefault(require("../../models/peajes"));
const puestos_1 = __importDefault(require("../../models/puestos"));
const acceso_1 = __importDefault(require("../../models/acceso"));
const usuario_1 = __importDefault(require("../../models/usuario"));
const turnos_1 = __importDefault(require("../../models/turnos"));
const turnos_usuarios_1 = __importDefault(require("../../models/turnos_usuarios"));
dotenv_1.default.config({ path: '.env' });
const dataBase = String(process.env.DATABASE);
const usuario = String(process.env.USER_BD);
const calve = String(process.env.PASSWORD_USER);
const host = String(process.env.HOST);
const puerto = String(process.env.PORT);
const poolConexion = new typeorm_1.DataSource({
    type: "postgres",
    host: host,
    username: usuario,
    password: calve,
    database: dataBase,
    synchronize: true,
    logging: true,
    ///////////////////////se agrega tamabien
    entities: [departamento_1.default, rutas_1.default, departamentos_rutas_1.default, peajes_1.default, puestos_1.default, acceso_1.default, usuario_1.default, turnos_1.default, turnos_usuarios_1.default],
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    ssl: { rejectUnauthorized: false }
});
poolConexion.initialize()
    .then((conn) => {
    console.log("Conexion establecida con el DB ", dataBase);
});
exports.default = poolConexion;
