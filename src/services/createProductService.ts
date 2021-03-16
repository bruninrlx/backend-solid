import { getCustomRepository } from 'typeorm';
import Product from '../entities/product';
import ProductRepository from '../repositories/productRepository';

interface Request {
  nameProduct: string;
  price: number;
  description: string;
  seller_id: string;
}

class CreateProductService {
  public async execute({ nameProduct, price, description }: Request): Promise<Product>{
    const productRepository = getCustomRepository(ProductRepository)


    const product = productRepository.create({
      nameProduct,
      price,
      description,
    });

    await productRepository.save(product);

    return product;
  }
}

export default CreateProductService

