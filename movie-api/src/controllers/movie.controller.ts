// movies.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException, Query } from '@nestjs/common'; // Import Query decorator
import { Movie } from '../models/movie.entity';
import { MovieService } from '../services/movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getAllMovies(
    @Query('page') page = 1,
    @Query('limit') limit = 10
  ): Promise<Movie[]> {
    return await this.movieService.getAllMovies(page, limit);
  }

  @Post()
  async createMovie(@Body() movie: Movie): Promise<Movie> {
    return await this.movieService.createMovie(movie);
  }

  @Put(':id')
  async updateMovie(@Param('id') id: number, @Body() movie: Movie): Promise<Movie> {
    const updatedMovie = await this.movieService.updateMovie(id, movie);
    if (!updatedMovie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return updatedMovie;
  }

  @Delete(':id')
  async deleteMovie(@Param('id') id: number): Promise<void> {
    await this.movieService.deleteMovie(id); // No need to check the result
  }
}
