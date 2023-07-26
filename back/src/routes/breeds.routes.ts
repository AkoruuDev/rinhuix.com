import { Router } from "express";
import { getAllBreeds, getBreedById, createNewBreed, updateBreedById, removeBreedById } from "../controllers";

const route = Router();

route
    .get('/all', getAllBreeds)
    .get('/:id', getBreedById)
    .post('/create', createNewBreed)
    .put('/update/:id', updateBreedById)
    .delete('/remove/:id', removeBreedById);

export {
    route as breedRouter,
}