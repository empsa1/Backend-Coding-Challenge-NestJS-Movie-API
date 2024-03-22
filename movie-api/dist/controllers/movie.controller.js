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
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const movie_entity_1 = require("../models/movie.entity");
const movie_service_1 = require("../services/movie.service");
let MoviesController = class MoviesController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async getAllMovies(page = 1, limit = 10) {
        return await this.movieService.getAllMovies(page, limit);
    }
    async createMovie(movie) {
        return await this.movieService.createMovie(movie);
    }
    async updateMovie(id, movie) {
        const updatedMovie = await this.movieService.updateMovie(id, movie);
        if (!updatedMovie) {
            throw new common_1.NotFoundException(`Movie with ID ${id} not found`);
        }
        return updatedMovie;
    }
    async deleteMovie(id) {
        await this.movieService.deleteMovie(id);
    }
};
exports.MoviesController = MoviesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getAllMovies", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_entity_1.Movie]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "createMovie", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, movie_entity_1.Movie]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "updateMovie", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "deleteMovie", null);
exports.MoviesController = MoviesController = __decorate([
    (0, common_1.Controller)('movies'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MoviesController);
//# sourceMappingURL=movie.controller.js.map