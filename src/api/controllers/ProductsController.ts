import {Router, Request, Response, NextFunction} from 'express';
import * as service from '../../services/ProductsService'

export const getAll = async (req:Request, res: Response)=>{
    res.send(await service.getAll());
};

export const getById = async (req:Request, res: Response, next:NextFunction)=>{
    res.send(await service.getById(req.params.productCode));
};

export const create = async (req:Request, res: Response)=>{
    res.status(201).send(await service.create(req.body));
};

export const updateById = async (req:Request, res: Response)=>{
    res.send(await service.updateById(req.params.productCode, req.body));
};

export const deleteById = async (req:Request, res: Response)=>{
    res.send(await service.deleteById(req.params.productCode));
};
