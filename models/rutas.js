"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const departamentos_rutas_1 = __importDefault(require("./departamentos_rutas"));
const peajes_1 = __importDefault(require("./peajes"));
let Rutas = class Rutas {
    constructor(nom, codR, con) {
        this.codRuta = codR;
        this.nombreRuta = nom;
        this.concesionRuta = con;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_ruta" }),
    __metadata("design:type", Number)
], Rutas.prototype, "codRuta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre_ruta", length: 200 }),
    __metadata("design:type", String)
], Rutas.prototype, "nombreRuta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "concesion_ruta", length: 500 }),
    __metadata("design:type", String)
], Rutas.prototype, "concesionRuta", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => departamentos_rutas_1.default, (objDepaRutas) => objDepaRutas.codRuta),
    __metadata("design:type", Array)
], Rutas.prototype, "departamentoRutas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => peajes_1.default, (objPeajes) => objPeajes.codRuta),
    __metadata("design:type", Array)
], Rutas.prototype, "peajes", void 0);
Rutas = __decorate([
    (0, typeorm_1.Entity)("rutas", { schema: "public" }),
    __metadata("design:paramtypes", [String, Number, String])
], Rutas);
exports.default = Rutas;
