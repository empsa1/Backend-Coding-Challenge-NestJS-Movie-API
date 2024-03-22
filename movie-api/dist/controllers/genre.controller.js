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
exports.GenresController = void 0;
const common_1 = require("@nestjs/common");
const genre_entity_1 = require("../models/genre.entity");
const genre_service_1 = require("../services/genre.service");
let GenresController = class GenresController {
    constructor(genreService) {
        this.genreService = genreService;
    }
    async getAllGenres(page = 1, limit = 10) {
        if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
            throw new common_1.BadRequestException('Invalid page or limit parameter');
        }
        return await this.genreService.getAllGenres(page, limit);
    }
    async createGenre(genre) {
        return await this.genreService.createGenre(genre);
    }
    async deleteGenre(id) {
        await this.genreService.deleteGenre(id);
    }
};
exports.GenresController = GenresController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "getAllGenres", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [genre_entity_1.Genre]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "createGenre", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "deleteGenre", null);
exports.GenresController = GenresController = __decorate([
    (0, common_1.Controller)('genres'),
    __metadata("design:paramtypes", [genre_service_1.GenreService])
], GenresController);
//# sourceMappingURL=genre.controller.js.map