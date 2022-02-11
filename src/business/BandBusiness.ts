import { IBandDatabase } from "../data/IBandDatabase";
import { Band, IBandRegisterDTO } from "../model/Band";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {
    constructor(
        private bandDataBase: IBandDatabase
    ){}

    async registerBand(
        bandRegisterDTO: IBandRegisterDTO
        ):Promise<string>{
        
            const id = (new IdGenerator).generate()

            await this.bandDataBase.createBand(
                id,
                bandRegisterDTO.name,
                bandRegisterDTO.musicGenre,
                bandRegisterDTO.responsible,
            );

            return id
    }

    async detailBand(identification: string):Promise<Band>{
        const band = await this.bandDataBase.getBandByIdentification(identification)
        return band
    }
}