import { Request, Response } from "express";
import httpStatus from "http-status";

function getAllUsers(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function getUserById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function createNewUser(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function updateUserById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function removeUserById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

export {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    removeUserById
}