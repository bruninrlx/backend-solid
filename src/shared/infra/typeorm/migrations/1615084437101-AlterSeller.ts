import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterSeller1615084437101 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'seller_id',
        type: 'uuid',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'ProductSeller',
        columnNames: ['seller_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('products', 'ProductSeller');

    await queryRunner.dropColumn('products', 'seller_id')

    await queryRunner.addColumn('products', new TableColumn({
      name: 'seller_id',
      type: 'varchar'
    }))
  }

}
