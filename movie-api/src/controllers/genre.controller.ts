import { Controller, Get, Post, Delete, Body, Param, NotFoundException, Query, BadRequestException } from '@nestjs/common';
import { Genre } from '../models/genre.entity';
import { GenreService } from '../services/genre.service';

@Controller('genres')
export class GenresController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  async getAllGenres(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Genre[]> {
    // Validate page and limit parameters
    if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
      throw new BadRequestException('Invalid page or limit parameter');
    }
    return await this.genreService.getAllGenres(page, limit);
  }

  @Post()
  async createGenre(@Body() genre: Genre): Promise<Genre> {
    return await this.genreService.createGenre(genre);
  }

  @Delete(':id')
  async deleteGenre(@Param('id') id: number): Promise<void> {
    await this.genreService.deleteGenre(id); // No need to check the result
  }
}