import { Router } from "express";
import { getAllUsers, getUserById, createNewUser, updateUserById, removeUserById } from "../controllers";

const route = Router();

route
    .get('/all', getAllUsers)
    .get('/:id', getUserById)
    .post('/create', createNewUser)
    .put('/update/:id', updateUserById)
    .delete('/remove/:id', removeUserById);

export {
    route as userRouter,
}