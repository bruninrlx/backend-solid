import { EntityRepository, Repository } from 'typeorm';

import Product from '../entities/product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product>{
  public async createProducts({nameProduct, price, description, seller_id}:ICreateProductDTO): Promise<Product>{
    const product = this.create({nameProduct, price, description, seller_id});

    await this.save(product);

    return product;
  }
}

export default ProductsRepository;
