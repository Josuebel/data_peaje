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
const turnos_1 = __importDefault(require("./turnos"));
const usuario_1 = __importDefault(require("./usuario"));
const puestos_1 = __importDefault(require("./puestos"));
let TurnosUsuarios = class TurnosUsuarios {
    constructor(codT, codP, codU, esta) {
        this.codUsuario = codU;
        this.codPuesto = codP;
        this.codTurno = codT;
        this.estadoTurnoUsuario = esta;
    }
};
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "cod_usuario" }),
    __metadata("design:type", Number)
], TurnosUsuarios.prototype, "codUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "cod_puesto" }),
    __metadata("design:type", Number)
], TurnosUsuarios.prototype, "codPuesto", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "cod_turno" }),
    __metadata("design:type", Number)
], TurnosUsuarios.prototype, "codTurno", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "estado_turno_usuario" }),
    __metadata("design:type", Number)
], TurnosUsuarios.prototype, "estadoTurnoUsuario", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => turnos_1.default, (objTurnos) => objTurnos.turnosUsu, {
        onDelete: "RESTRICT", onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_turno", referencedColumnName: "codTurno"
        }]),
    __metadata("design:type", turnos_1.default)
], TurnosUsuarios.prototype, "codTurnos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_1.default, (objUsuario) => objUsuario.turnosUsu, {
        onDelete: "RESTRICT", onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_usuario", referencedColumnName: "codUsuario"
        }]),
    __metadata("design:type", usuario_1.default)
], TurnosUsuarios.prototype, "codUsuarios", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => puestos_1.default, (objPuestos) => objPuestos.turnosUsu, {
        onDelete: "RESTRICT", onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_puesto", referencedColumnName: "codPuesto"
        }]),
    __metadata("design:type", puestos_1.default)
], TurnosUsuarios.prototype, "codPuestos", void 0);
TurnosUsuarios = __decorate([
    (0, typeorm_1.Entity)("turnos_usuarios", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, Number, Number])
], TurnosUsuarios);
exports.default = TurnosUsuarios;
