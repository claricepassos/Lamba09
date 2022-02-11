import { Band } from "../model/Band";

export interface IBandDatabase {
    createBand(
        id: string,
        name: string,
        musicGenre: string,
        responsible: string
    ):Promise<void>

    getBandByIdentification(id: string):Promise<Band>
}