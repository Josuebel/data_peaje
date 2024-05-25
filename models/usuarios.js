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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
    constructor(cod, nom) {
        this.codUsuario = cod;
        this.identificacionUsuario = nom;
        this.nombresUsuario = nom;
        this.apellidosUsuario = nom;
        this.rolUsuario = nom;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_usuario" }),
    __metadata("design:type", Number)
], Usuario.prototype, "codUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "identificacion_usuario", length: 20 }),
    __metadata("design:type", String)
], Usuario.prototype, "identificacionUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombres_usuario", length: 250 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombresUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "apellidos_usuario", length: 250 }),
    __metadata("design:type", String)
], Usuario.prototype, "apellidosUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "rol_usuario", length: 250 }),
    __metadata("design:type", String)
], Usuario.prototype, "rolUsuario", void 0);
Usuario = __decorate([
    (0, typeorm_1.Entity)("usuarios", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String])
], Usuario);
exports.default = Usuario;
