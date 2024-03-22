// services/genre.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from '../models/genre.entity';

@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(Genre)
        private readonly genreRepository: Repository<Genre>, // Inject GenreRepository here
      ) {}

  async getAllGenres(page: number = 1, limit: number = 10): Promise<Genre[]> {
    const skip = (page - 1) * limit;
    return await this.genreRepository.find({
      skip,
      take: limit,
    });
  }

  async getGenreById(id: number): Promise<Genre> {
    const genre = await this.genreRepository.findOne({ where: { id } });
    if (!genre) {
      throw new NotFoundException(`Genre with id ${id} not found`);
    }
    return genre;
  }
  
  async createGenre(genreData: Partial<Genre>): Promise<Genre> {
    const genre = this.genreRepository.create(genreData);
    return await this.genreRepository.save(genre);
  }

  async updateGenre(id: number, genreData: Partial<Genre>): Promise<Genre> {
    const genre = await this.getGenreById(id);
    this.genreRepository.merge(genre, genreData);
    return await this.genreRepository.save(genre);
  }

  async deleteGenre(id: number): Promise<void> {
    const genre = await this.getGenreById(id);
    await this.genreRepository.remove(genre);
  }
}