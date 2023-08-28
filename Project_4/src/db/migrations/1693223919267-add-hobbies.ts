import { MigrationInterface, QueryRunner } from "typeorm";

export class addHobbies1693223919267 implements MigrationInterface {
    name = 'addHobbies1693223919267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "hobbies" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hobbies"`);
    }

}
