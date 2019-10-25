import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Geolocation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    request: string

    @Column()
    ip: string

    @Column()
    type: string

    @Column()
    continent_code: string

    @Column()
    continent_name: string

    @Column()
    country_code: string

    @Column()
    country_name: string

    @Column()
    region_code: string

    @Column()
    region_name: string

    @Column()
    city: string

    @Column()
    zip: string

    @Column()
    latitude: number

    @Column()
    longitude: number
}
