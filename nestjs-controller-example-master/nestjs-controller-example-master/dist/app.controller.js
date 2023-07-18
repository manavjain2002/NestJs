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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    getHello() {
        return {
            message: 'Hello world',
        };
    }
    postHello() {
        return {
            message: 'Hello world Post',
        };
    }
    getIdParamId(id) {
        console.log('🚀 ~ file: app.controller.ts:20 ~ AppController ~ getIdParamObj ~ param:', id);
        return {
            id: id,
        };
    }
    getId(id) {
        return {
            id: id,
        };
    }
    getIdParamObj(body) {
        console.log('🚀 ~ file: app.controller.ts:20 ~ AppController ~ getIdParamObj ~ param:', body);
        return body;
    }
    getRes(res) {
        return {
            message: 'error',
        };
    }
    redirect(param) {
        const x = parseInt(param.x);
        if (x < 10) {
            return {
                url: `http://localhost:3000/users/getData/${x}`,
                statusCode: 200,
            };
        }
        else {
            return {
                url: `http://localhost:3000/users/getData/${x + 10}`,
                statusCode: 400,
            };
        }
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "postHello", null);
__decorate([
    (0, common_1.Get)('/getData/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getIdParamId", null);
__decorate([
    (0, common_1.Get)('/getData'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getId", null);
__decorate([
    (0, common_1.Get)('/getDataBody'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getIdParamObj", null);
__decorate([
    (0, common_1.Get)('/error'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getRes", null);
__decorate([
    (0, common_1.Get)('/redirect/:x'),
    (0, common_1.Redirect)(`http://localhost:3000/users/getData/`, 200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "redirect", null);
AppController = __decorate([
    (0, common_1.Controller)('/users')
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map