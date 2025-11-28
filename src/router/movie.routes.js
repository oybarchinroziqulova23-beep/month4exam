import { Router } from "express";
import  MovieController  from "../controller/movie.controller.js";

const router = Router();

router
    .get("/", MovieController.getAllMovie)
    .post("/", MovieController.createMovie)
    .put("/:id", MovieController.updateMovie)
    .get("/:id", MovieController.getByIdMovie)
    .delete("/:id", MovieController.deleteMovie);

export default router;
