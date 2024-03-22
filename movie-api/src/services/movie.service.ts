// movie.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../models/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async getAllMovies(page: number, limit: number): Promise<Movie[]> {
    const skip = (page - 1) * limit;
    return await this.movieRepository.find({
      skip,
      take: limit,
    });
  }

  async getMovieById(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }
    return movie;
  }

  async createMovie(movieData: Partial<Movie>): Promise<Movie> {
    const movie = this.movieRepository.create(movieData);
    return await this.movieRepository.save(movie);
  }

  async updateMovie(id: number, movieData: Partial<Movie>): Promise<Movie> {
    await this.movieRepository.update(id, movieData);
    return await this.getMovieById(id); // Return the updated movie
  }

  async deleteMovie(id: number): Promise<void> {
    await this.movieRepository.delete(id);
  }
}