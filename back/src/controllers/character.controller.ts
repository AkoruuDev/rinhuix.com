import { Request, Response } from "express";
import httpStatus from "http-status";

function getAllCharacters(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function getCharacterById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function createNewCharacter(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function updateCharacterById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function removeCharacterById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

export {
    getAllCharacters,
    getCharacterById,
    createNewCharacter,
    updateCharacterById,
    removeCharacterById
}