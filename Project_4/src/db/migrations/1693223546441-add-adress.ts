import { MigrationInterface, QueryRunner } from "typeorm";

export class addAdress1693223546441 implements MigrationInterface {
    name = 'addAdress1693223546441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }

}
