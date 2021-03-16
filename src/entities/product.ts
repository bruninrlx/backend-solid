import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Users from '../entities/user';

@Entity('products')
class Products {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nameProduct: string;

  @Column()
  seller_id: string

  @ManyToOne(()=>Users)
  @JoinColumn({ name: 'seller_id'})
  seller: Users;

  @Column('numeric')
  price: number;

  @Column()
  description: string;
}

export default Products;
