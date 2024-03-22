// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenresController } from './controllers/genre.controller';
import { MoviesController } from './controllers/movie.controller';
import { GenreService } from './services/genre.service'; // Import GenreService
import { MovieService } from './services/movie.service'; // Import MovieService
import { Genre } from './models/genre.entity'; // Import Genre entity
import { Movie } from './models/movie.entity'; // Import Movie entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Your TypeORM configuration options here
      // For example:
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'eportela',
      password: 'backend-project',
      database: 'movies',
      entities: [Genre, Movie],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Genre, Movie]), // Import entities for repository injection
  ],
  controllers: [AppController, GenresController, MoviesController],
  providers: [AppService, GenreService, MovieService], // Add GenreService and MovieService here
})
export class AppModule {}
