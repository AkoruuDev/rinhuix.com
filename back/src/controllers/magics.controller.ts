import { Request, Response } from "express";
import httpStatus from "http-status";

function getAllMagics(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function getMagicById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function createNewMagic(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function updateMagicById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

function removeMagicById(req: Request, res: Response) {
    return res.status(httpStatus.OK).send('OK');
};

export {
    getAllMagics,
    getMagicById,
    createNewMagic,
    updateMagicById,
    removeMagicById
}