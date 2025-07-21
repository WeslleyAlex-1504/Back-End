import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1752711166284 implements MigrationInterface {
    name = 'InitialMigration1752711166284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produtos" ("id" SERIAL NOT NULL, "tipo" character varying NOT NULL, "sabor" character varying NOT NULL, "descricao" character varying NOT NULL, "preco" character varying NOT NULL, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vendas" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "produtoId" integer, CONSTRAINT "PK_371c42d415efbac7097bd08b744" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD CONSTRAINT "FK_4851720fa413ee659cfa67d1b7a" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendas" DROP CONSTRAINT "FK_4851720fa413ee659cfa67d1b7a"`);
        await queryRunner.query(`DROP TABLE "vendas"`);
        await queryRunner.query(`DROP TABLE "produtos"`);
    }

}
