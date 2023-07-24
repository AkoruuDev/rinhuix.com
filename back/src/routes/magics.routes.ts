import { Router } from "express";
import { getAllMagics, getMagicById, createNewMagic, updateMagicById, removeMagicById } from "../controllers";

const route = Router();

route
    .get('/all', getAllMagics)
    .get('/:id', getMagicById)
    .post('/create', createNewMagic)
    .put('/update/:id', updateMagicById)
    .delete('/remove/:id', removeMagicById);

export {
    route as magicRouter,
}