import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1754151803676 implements MigrationInterface {
    name = 'InitialMigration1754151803676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vendas" ("id" SERIAL NOT NULL, "quantidade" integer NOT NULL, "lucro" integer NOT NULL, "data_venda" TIMESTAMP NOT NULL DEFAULT now(), "sabor" character varying NOT NULL, "produtoId" integer, CONSTRAINT "PK_371c42d415efbac7097bd08b744" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD CONSTRAINT "FK_4851720fa413ee659cfa67d1b7a" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendas" DROP CONSTRAINT "FK_4851720fa413ee659cfa67d1b7a"`);
        await queryRunner.query(`DROP TABLE "vendas"`);
    }

}
