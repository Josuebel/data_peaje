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
const rutas_1 = __importDefault(require("./rutas"));
const puestos_1 = __importDefault(require("./puestos"));
let Peajes = class Peajes {
    constructor(codP, codR, nom, fotoPu, fotPri) {
        this.codPeaje = codP;
        this.codRuta = codR;
        this.nombrePeaje = nom;
        // this.fotoPrivadaPeaje=fotPri;
        //this.fotoPublicaPeaje=fotoPu;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "cod_peaje" }),
    __metadata("design:type", Number)
], Peajes.prototype, "codPeaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cod_ruta" }),
    __metadata("design:type", Number)
], Peajes.prototype, "codRuta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre_Peaje", length: 200 }),
    __metadata("design:type", String)
], Peajes.prototype, "nombrePeaje", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rutas_1.default, (objRutas) => objRutas.peajes, {
        onDelete: "RESTRICT", onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_ruta", referencedColumnName: "codRuta"
        }]),
    __metadata("design:type", rutas_1.default)
], Peajes.prototype, "codRutaR", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => puestos_1.default, (objPuestos) => objPuestos.codPeaje),
    __metadata("design:type", Array)
], Peajes.prototype, "puestoss", void 0);
Peajes = __decorate([
    (0, typeorm_1.Entity)("peajes", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, String, String, String])
], Peajes);
exports.default = Peajes;
