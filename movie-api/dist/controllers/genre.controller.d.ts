import { Genre } from '../models/genre.entity';
import { GenreService } from '../services/genre.service';
export declare class GenresController {
    private readonly genreService;
    constructor(genreService: GenreService);
    getAllGenres(page?: number, limit?: number): Promise<Genre[]>;
    createGenre(genre: Genre): Promise<Genre>;
    deleteGenre(id: number): Promise<void>;
}
