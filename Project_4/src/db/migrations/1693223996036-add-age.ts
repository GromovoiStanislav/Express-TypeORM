import { MigrationInterface, QueryRunner } from "typeorm";

export class addAge1693223996036 implements MigrationInterface {
    name = 'addAge1693223996036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL DEFAULT '18'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }

}
