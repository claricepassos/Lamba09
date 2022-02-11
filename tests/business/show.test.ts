import { ShowBusiness } from "../../src/business/ShowBusiness"
import { addShowMockFail } from "../mocks/databaset"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"

describe('Show', () => {
    test('insert fail', async () => {
        try {
            const showDatabase = new ShowDatabaseMock()
            const showBusiness = new ShowBusiness(showDatabase)
            const fail = addShowMockFail
         
            await showBusiness.addShow({
                weekDay: fail.weekDay,
                startTime: fail.startTime,
                endTime: fail.endTime,
                bandId: 'random id'
            })
        } catch (error: any) {
            expect(error).toBeDefined()
        } finally {
            expect.assertions(1)
        }
    })
})