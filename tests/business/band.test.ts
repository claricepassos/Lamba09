import { BandBusiness } from "../../src/business/BandBusiness"
import { Band } from "../../src/model/Band"
import { BandDatabaseMock } from "../mocks/BandDatabaseMock"

describe('Band', () => {
    const bandDatabaseMock = new BandDatabaseMock()
    const bandBusiness = new BandBusiness(bandDatabaseMock)

    const req = {
        body: {
            name: "Name1",
            musicGenre: "Genre 1",
            responsible: "Responsible 1"
        }
    }

    test('Inserting and finding', async () => {
        try {
            const name = req.body.name as string
            const musicGenre = req.body.musicGenre as string
            const responsible = req.body.responsible as string

            const id = await bandBusiness.registerBand({name, musicGenre, responsible})
            expect(id).toBeDefined()

            const band = await bandBusiness.detailBand(id)

            expect(band).toBeDefined()
            expect(band.getName()).toBe(name)
            expect(band.getMusicGenre()).toBe(musicGenre)
            expect(band.getReponsible()).toBe(responsible)

        } catch (error: any) {
            console.log(error)
        } finally {
            expect.assertions(5)
        }
    })

    test('Inserting fail', async () => {
        try {
            const name = req.body.name as string
            const musicGenre = req.body.musicGenre as string
            const responsible = req.body.responsible as string

            await bandBusiness.registerBand({name, musicGenre, responsible})
            await bandBusiness.registerBand({name, musicGenre, responsible})

        } catch (error: any) {
            expect(error).toBeDefined()
        } finally {
            expect.assertions(1)
        }
    })
})