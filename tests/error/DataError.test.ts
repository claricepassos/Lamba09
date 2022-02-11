import { DataError } from "../../src/error/DataError"
import { internalError } from "../mocks/ErrorMessage"

describe('Testing DataError', () => {
    test('Content', () => {
        try {
            throw new DataError(internalError.message, internalError.code)

        } catch(error: any) {
            expect(error.message).toBe(internalError.message)
            expect(error.code).toBe(internalError.code)
        } finally {
            expect.assertions(2)
        }
    })
})