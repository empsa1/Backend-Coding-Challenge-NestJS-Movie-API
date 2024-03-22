import { Movie } from '../models/movie.entity';
import { MovieService } from '../services/movie.service';
export declare class MoviesController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getAllMovies(page?: number, limit?: number): Promise<Movie[]>;
    createMovie(movie: Movie): Promise<Movie>;
    updateMovie(id: number, movie: Movie): Promise<Movie>;
    deleteMovie(id: number): Promise<void>;
}
