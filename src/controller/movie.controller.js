import Movie from '../schema/movie.schema.js';
import { ApiError } from '../utils/custom-error.js';
import { successRes } from '../utils/success-response.js';
import { errorRes } from '../utils/error-response.js';

class MovieController {
    async createMovie(req, res) {
        try {
            const { title,description,language,genre } = req.body;

            const data = await Movie.findOne({ title });
            if (data) {
                throw new ApiError('The movie already exists', 409);
            }

            const newMovie = await Movie.create(req.body);
            return successRes(res, newMovie, 201);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async getAllMovie(_req, res) {
        try {
            const movies = await Movie.find();
            return successRes(res, movies);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async getByIdMovie(req, res) {
        try {
            const movie = await Movie.findById(req.params?.id)
            if (!movie) {
                throw new ApiError('Movie not found', 404);
            }
            return successRes(res, movie);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async updateMovie(req,res){
        try{
            const movie = await Movie.findById(req.params?.id);
            if(!movie){
                throw new ApiError
            }
        }catch(error){

        }
    }
    async updateMovies(req, res) {
        try {
            const movie = await Movie.findById(req.params?.id);
            if (!movie) {
                throw new ApiError("Movie not found",404);
            }
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return successRes(res, updatedMovie);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async deleteMovie(req, res) {
        try {
            const movie = await Movie.findById(req.params?.id);
            if (!movie) {
                throw new ApiError ("Movie not found",404);
            }
            await Movie.findByIdAndDelete(req.params.id);
            return successRes(res, {});
        } catch (error) {
            return errorRes(res, error);
        }
    }
}

export default new MovieController();
