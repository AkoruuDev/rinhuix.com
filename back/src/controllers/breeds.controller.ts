import { Request, Response } from "express";
import httpStatus from "http-status";

function getAllBreeds(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function getBreedById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function createNewBreed(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function updateBreedById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function removeBreedById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

export {
    getAllBreeds,
    getBreedById,
    createNewBreed,
    updateBreedById,
    removeBreedById
}