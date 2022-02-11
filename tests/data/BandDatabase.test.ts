// import { BandDatabase } from "../../src/data/BandDatabase"
// import { bandMock } from "../mocks/databaset"

// describe('Testing band database', () => {
//     const bandDatabase = new BandDatabase()

//     test('inserting and finding', async () => {
//         try {
//             await bandDatabase.createBand(
//                 bandMock.id,
//                 bandMock.name,
//                 bandMock.musicGenre,
//                 bandMock.responsible
//             )

//             const band = await bandDatabase.getBandById(bandMock.id)

//             expect(band).toBeDefined()
//             expect(band.getName()).toBe(bandMock.name)

//         } catch (error: any) {
//             console.log(error.message)
//         } finally {
//             expect.assertions(2)
//         }
//     })
// })

describe('Teste para contornar a falta de env', () => {
    test('um', () => {
        expect(true).toBeTruthy()
    })
})