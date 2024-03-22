"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const genre_controller_1 = require("./controllers/genre.controller");
const movie_controller_1 = require("./controllers/movie.controller");
const genre_service_1 = require("./services/genre.service");
const movie_service_1 = require("./services/movie.service");
const genre_entity_1 = require("./models/genre.entity");
const movie_entity_1 = require("./models/movie.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'eportela',
                password: 'backend-project',
                database: 'movies',
                entities: [genre_entity_1.Genre, movie_entity_1.Movie],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([genre_entity_1.Genre, movie_entity_1.Movie]),
        ],
        controllers: [app_controller_1.AppController, genre_controller_1.GenresController, movie_controller_1.MoviesController],
        providers: [app_service_1.AppService, genre_service_1.GenreService, movie_service_1.MovieService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map