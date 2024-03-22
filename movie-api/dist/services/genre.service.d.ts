import { Repository } from 'typeorm';
import { Genre } from '../models/genre.entity';
export declare class GenreService {
    private readonly genreRepository;
    constructor(genreRepository: Repository<Genre>);
    getAllGenres(page?: number, limit?: number): Promise<Genre[]>;
    getGenreById(id: number): Promise<Genre>;
    createGenre(genreData: Partial<Genre>): Promise<Genre>;
    updateGenre(id: number, genreData: Partial<Genre>): Promise<Genre>;
    deleteGenre(id: number): Promise<void>;
}
