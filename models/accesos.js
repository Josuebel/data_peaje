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
let Accesos = class Accesos {
    constructor(cod, nom) {
        this.codUsuario = cod;
        this.nombreAcceso = nom;
        this.claveAcceso = nom;
    }
};
__decorate([
    (0, typeorm_1.Column)({ name: "cod_usuario", type: "int4" }),
    __metadata("design:type", Number)
], Accesos.prototype, "codUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre_acceso", length: 250 }),
    __metadata("design:type", String)
], Accesos.prototype, "nombreAcceso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "clave_acceso", length: 500 }),
    __metadata("design:type", String)
], Accesos.prototype, "claveAcceso", void 0);
Accesos = __decorate([
    (0, typeorm_1.Entity)("accesos", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String])
], Accesos);
exports.default = Accesos;
