import { Router } from "express";
import { getAllCharacters, getCharacterById, createNewCharacter, updateCharacterById, removeCharacterById } from "../controllers";

const route = Router();

route
    .get('/all', getAllCharacters)
    .get('/:id', getCharacterById)
    .post('/create', createNewCharacter)
    .put('/update/:id', updateCharacterById)
    .delete('/remove/:id', removeCharacterById);

export {
    route as characterRouter,
}