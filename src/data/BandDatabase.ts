import { IBandDatabase } from "./IBandDatabase";
import { BaseDatabase } from "./BaseDatabase";
import { DataError } from "../error/DataError";
import { Band } from "../model/Band";
export class BandDatabase extends BaseDatabase implements IBandDatabase {
      private static TABLE_NAME = "band_table";

      public async createBand(
        id: string,
        name: string,
        musicGenre: string,
        responsible: string
      ): Promise<void> {
        try {
          await this.getConnection()
            .insert({
                id,
                name,
                music_genre: musicGenre,
                responsible
            })
            .into(BandDatabase.TABLE_NAME);
    
        } catch (error: any) {
            throw new DataError(error.sqlMessage || error.message, 500);
        }
      }
    
      public async getBandByIdentification(identification: string): Promise<Band> {
        let result = await this.getConnection()
          .select("*")
          .from(BandDatabase.TABLE_NAME)
          .where({ id: identification });

        if(!result[0]){
          result = await this.getConnection()
          .select("*")
          .from(BandDatabase.TABLE_NAME)
          .where({ name: identification });
        }
    
        return Band.toBandModel(result[0]);
      }
}

