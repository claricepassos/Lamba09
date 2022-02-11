import { HashManager } from "../../src/services/HashManager"

describe('hash manager', () => {
    const hashManager = new HashManager()

    test('hash and compare', async () => {
        try {
            const plaintext = 'password'
            const cyphertext = await hashManager.hash(plaintext)
    
            expect(cyphertext).toBeDefined()
    
            const expectedTrue = await hashManager.compare(plaintext, cyphertext)
            const expectedFalse = await hashManager.compare('Other pass', cyphertext)
    
            expect(expectedTrue).toBeTruthy()
            expect(expectedFalse).toBeFalsy()
            
        } catch (error: any) {
            console.log(error)
        } finally {
            expect.assertions(3)
        }

    })
})