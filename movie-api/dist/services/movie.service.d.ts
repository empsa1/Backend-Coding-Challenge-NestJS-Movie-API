import { Repository } from 'typeorm';
import { Movie } from '../models/movie.entity';
export declare class MovieService {
    private readonly movieRepository;
    constructor(movieRepository: Repository<Movie>);
    getAllMovies(page: number, limit: number): Promise<Movie[]>;
    getMovieById(id: number): Promise<Movie>;
    createMovie(movieData: Partial<Movie>): Promise<Movie>;
    updateMovie(id: number, movieData: Partial<Movie>): Promise<Movie>;
    deleteMovie(id: number): Promise<void>;
}
