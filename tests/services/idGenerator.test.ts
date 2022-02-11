import { IdGenerator } from "../../src/services/IdGenerator"

describe('Id generator', () => {
    const idGenerator = new IdGenerator()

    test('is string', () => {
        expect(typeof idGenerator.generate()).toBe('string')
    })

    test('unique', () => {
        const id1 = idGenerator.generate()
        const id2 = idGenerator.generate()

        expect(id1).not.toBe(id2)
    })
})