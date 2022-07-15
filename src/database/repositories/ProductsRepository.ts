import Product, { ProductInput, ProductOutput } from '../../api/models/ProductsModels'
import { AppError } from '../../utils/AppError';

export const getAll = async (): Promise<ProductOutput[]> =>{
    return await Product.findAll({
        include:{all:true}
    });
}

export const getById = async (productCode:string): Promise<ProductOutput>=> {
    const product = await Product.findOne({
        where:{
            productCode:productCode
        },
        include:{all:true, nested:true}
    });
    if (!product){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return product;
};

export const create = async (payload: ProductInput):Promise<ProductOutput> =>{
    return await Product.create(payload);
};

export const updateById = async (productCode:string, payload: ProductInput):Promise<ProductOutput> =>{
    const product= await Product.findByPk(productCode);
    if(!product){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await product.update(payload);
};

export const deleteById = async (productCode:string):Promise<void> =>{
    const product= await Product.findByPk(productCode);
    if(!product){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await product.destroy()
};