import * as repository from '../database/repositories/ProductsRepository'
import { ProductInput, ProductOutput } from "../api/models/ProductsModels"

export const getAll = async (): Promise<ProductOutput[]> => {
    return await repository.getAll();
}

export const getById = async (productCode:string): Promise<ProductOutput>=> {
    return await repository.getById(productCode);
} 

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    return await repository.create(payload)
}

export const updateById = async (productCode:string, payload: ProductInput):Promise<ProductOutput> =>{
    return await repository.updateById(productCode, payload);
};

export const deleteById = async (productCode:string):Promise<void> =>{
    await repository.deleteById(productCode);
};

function productCode(productCode: any, payload: ProductInput): ProductOutput | PromiseLike<ProductOutput> {
    throw new Error('Function not implemented.');
}
