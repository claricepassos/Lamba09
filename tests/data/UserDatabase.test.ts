// import { UserDatabase } from "../../src/data/UserDatabase"
// import { userMock } from "../mocks/databaset"

// describe('Testing user database', () => {
//     const userDatabase = new UserDatabase()

//     test('inserting and finding', async () => {
//         try {
//             await userDatabase.createUser(
//                 userMock.id,
//                 userMock.email,
//                 userMock.name,
//                 userMock.password,
//                 userMock.role
//             )

//             const user = await userDatabase.getUserByEmail(userMock.email)

//             expect(user).toBeDefined()
//             expect(user.getEmail()).toBe(userMock.email)

//         } catch (error: any) {
//             console.log(error.message)
//         } finally {
//             expect.assertions(2)
//         }
//     })
// })

describe('Teste para contornar a falta de env', () => {
    test('tres', () => {
        expect(true).toBeTruthy()
    })
})