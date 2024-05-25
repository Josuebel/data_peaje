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
const peajes_1 = __importDefault(require("./peajes"));
const turnos_usuarios_1 = __importDefault(require("./turnos_usuarios"));
let Puestos = class Puestos {
    constructor(codPu, codPe, hr) {
        this.codPuesto = codPu;
        this.codPeaje = codPe;
        this.horarioPuesto = hr;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "cod_puesto" }),
    __metadata("design:type", Number)
], Puestos.prototype, "codPuesto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cod_peaje", type: "int4" }),
    __metadata("design:type", Number)
], Puestos.prototype, "codPeaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "horario_puesto", length: 200 }),
    __metadata("design:type", String)
], Puestos.prototype, "horarioPuesto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => peajes_1.default, (objPeajes) => objPeajes.puestoss, {
        onDelete: "RESTRICT", onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_peaje", referencedColumnName: "codPeaje"
        }]),
    __metadata("design:type", Puestos)
], Puestos.prototype, "codPeajes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => turnos_usuarios_1.default, (objTurnosUsu) => objTurnosUsu.codPuesto),
    __metadata("design:type", Array)
], Puestos.prototype, "turnosUsu", void 0);
Puestos = __decorate([
    (0, typeorm_1.Entity)("puestos", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, String])
], Puestos);
exports.default = Puestos;
