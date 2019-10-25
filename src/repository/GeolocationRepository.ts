import {getConnection} from "typeorm"

import {Geolocation} from "../entity/Geolocation"

export const getAll = async () => {
  return getConnection()
    .getRepository(Geolocation)
    .createQueryBuilder("geolocation")
    .getMany();
}

export const getByRequest = async (request) => {
  return getConnection()
    .getRepository(Geolocation)
    .createQueryBuilder("geolocation")
    .where("geolocation.request = :request", { request })
    .getOne();
}

export const save = async (data) => {
  return getConnection()
    .createQueryBuilder()
    .insert()
    .into(Geolocation)
    .values([ data ])
    .execute();
}

export const remove = async (request) => {
  return getConnection()
    .createQueryBuilder()
    .delete()
    .from(Geolocation)
    .where("geolocation.request = :request", { request })
    .execute()
}
