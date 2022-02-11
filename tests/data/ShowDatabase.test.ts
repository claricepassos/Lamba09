// import { BandDatabase } from "../../src/data/BandDatabase"
// import { ShowDatabase } from "../../src/data/ShowDatabase"
// import { bandMock, showMock } from "../mocks/databaset"

// describe('Testing show database', () => {
//     const showDatabase = new ShowDatabase()
//     const bandDatabase = new BandDatabase()

//     test('inserting and finding', async () => {
//         try {
//             await bandDatabase.createBand(
//                 bandMock.id,
//                 bandMock.name,
//                 bandMock.musicGenre,
//                 bandMock.responsible
//             )

//             await showDatabase.createShow(
//                 showMock.id,
//                 showMock.weekDay,
//                 showMock.startTime,
//                 showMock.endTime,
//                 bandMock.id
//             )

//             const shows = await showDatabase.getShowsByDay(showMock.weekDay)

//             expect(shows).toBeDefined()
//             expect(shows.length).toBeGreaterThan(0)

//         } catch (error: any) {
//             console.log(error.message)
//         } finally {
//             expect.assertions(2)
//         }
//     })
// })

describe('Teste para contornar a falta de env', () => {
    test('dois', () => {
        expect(true).toBeTruthy()
    })
})