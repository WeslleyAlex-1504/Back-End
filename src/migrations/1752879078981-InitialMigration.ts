import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1752879078981 implements MigrationInterface {
    name = 'InitialMigration1752879078981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "despesas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "valor" integer NOT NULL, "mes" character varying NOT NULL, "ano" integer NOT NULL, CONSTRAINT "PK_e56af303d820f51a6e6a007b380" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "tipo"`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "sabor"`);
        await queryRunner.query(`ALTER TABLE "vendas" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "vendas" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "nome" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD "quantidade" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD "lucro" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD "data_venda" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "preco"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "preco" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "preco"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "preco" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendas" DROP COLUMN "data_venda"`);
        await queryRunner.query(`ALTER TABLE "vendas" DROP COLUMN "lucro"`);
        await queryRunner.query(`ALTER TABLE "vendas" DROP COLUMN "quantidade"`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD "content" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "sabor" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "tipo" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "despesas"`);
    }

}
