import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1691640405048 implements MigrationInterface {
    name = 'NewMigration1691640405048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "card_number" character varying(10) NOT NULL, CONSTRAINT "UQ_d2d717efd90709ebd3cb26b936c" UNIQUE ("email"), CONSTRAINT "UQ_ae007bdcf878c54658968ab6169" UNIQUE ("card_number"), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "banker" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "card_number" character varying(10) NOT NULL, "employee_number" character varying(10) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_c1944a58f7ecf3afbfe23173723" UNIQUE ("email"), CONSTRAINT "UQ_8069c792f02262882252b843491" UNIQUE ("card_number"), CONSTRAINT "UQ_277df013559cb6637ad9a5fe312" UNIQUE ("employee_number"), CONSTRAINT "PK_3b517d2449b13a1a9b41c949e3a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transaction" ("id" SERIAL NOT NULL, "type" "public"."transaction_type_enum" NOT NULL, "amount" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "client_id" integer, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "card_number" character varying(10) NOT NULL, "balance" numeric NOT NULL, "active" boolean NOT NULL DEFAULT true, "additional_info" text, "family_members" text NOT NULL DEFAULT '[]', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "UQ_bc0c644bf2e06d38466b66ecd66" UNIQUE ("card_number"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bankers_clients" ("banker" integer NOT NULL, "client" integer NOT NULL, CONSTRAINT "PK_a02a4153f0821c1d389d599a846" PRIMARY KEY ("banker", "client"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2464224e61da8368e1fb394202" ON "bankers_clients" ("banker") `);
        await queryRunner.query(`CREATE INDEX "IDX_87851fe81663efd8d6e50e9401" ON "bankers_clients" ("client") `);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_3e4cf3f31643825f80f28f929e2" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bankers_clients" ADD CONSTRAINT "FK_2464224e61da8368e1fb3942020" FOREIGN KEY ("banker") REFERENCES "banker"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "bankers_clients" ADD CONSTRAINT "FK_87851fe81663efd8d6e50e94012" FOREIGN KEY ("client") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bankers_clients" DROP CONSTRAINT "FK_87851fe81663efd8d6e50e94012"`);
        await queryRunner.query(`ALTER TABLE "bankers_clients" DROP CONSTRAINT "FK_2464224e61da8368e1fb3942020"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_3e4cf3f31643825f80f28f929e2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_87851fe81663efd8d6e50e9401"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2464224e61da8368e1fb394202"`);
        await queryRunner.query(`DROP TABLE "bankers_clients"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`DROP TABLE "banker"`);
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
