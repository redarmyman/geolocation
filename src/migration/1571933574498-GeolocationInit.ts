import {MigrationInterface, QueryRunner} from "typeorm";

export class GeolocationInit1571933574498 implements MigrationInterface {
    name = 'GeolocationInit1571933574498'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "geolocation" ("id" SERIAL NOT NULL, "request" character varying NOT NULL, "ip" character varying NOT NULL, "type" character varying NOT NULL, "continent_code" character varying NOT NULL, "continent_name" character varying NOT NULL, "country_code" character varying NOT NULL, "country_name" character varying NOT NULL, "region_code" character varying NOT NULL, "region_name" character varying NOT NULL, "city" character varying NOT NULL, "zip" character varying NOT NULL, "latitude" float NOT NULL, "longitude" float NOT NULL, CONSTRAINT "PK_36aa5f8d0de597a21a725ee1cc2" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "geolocation"`, undefined);
    }

}
