import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateProducts1615047558154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'products',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'nameProduct',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'price',
              type: 'numeric',
              isNullable: false,
            },
            {
              name: 'description',
              type: 'varchar',
              isNullable: false,
            }
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('products')
    }

}
