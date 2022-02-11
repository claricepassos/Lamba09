import { BaseDatabase } from "../../src/data/BaseDatabase";
import { IBandDatabase } from "../../src/data/IBandDatabase";
import { DataError } from "../../src/error/DataError";
import { Band } from "../../src/model/Band";

export class BandDatabaseMock extends BaseDatabase implements IBandDatabase {
  private database: any[] = [];

  public async createBand(
    id: string,
    name: string,
    musicGenre: string,
    responsible: string
  ): Promise<void> {

    if( this.database.some(e => e.name === name) )
        throw new DataError('Duplicated name', 501)

    try {
        this.database.push({
            id,
            name,
            music_genre: musicGenre,
            responsible
        })

    } catch (error: any) {
      throw new DataError(error.sqlMessage || error.message || "Some error", 500);
    }
  }

  public async getBandByIdentification(id: string): Promise<Band> {
    const result = this.database.find(e => e.id === id)

    return Band.toBandModel(result)
  }
}
