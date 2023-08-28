var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
let User = class User {
    id;
    firstName;
    lastName;
    address;
    hobbies;
    age;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    Column({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    Column({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "hobbies", void 0);
__decorate([
    Column({
        default: 18,
    }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
User = __decorate([
    Entity()
], User);
export { User };
