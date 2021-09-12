const hash = require("./hash")

describe("helpers/hash", () => {
    test("should return random char", async () => {
        const result = await hash("abcd1234")
        console.log(result)
        expect(result).toEqual(expect.stringContaining("$"))
    })

    test("should throw error when params not provide", async() => {
        try {
            const result = await hash()
            expect(result).toBe(false)
        } catch (error) {
            expect(error.message).toBe("data and salt arguments required")
        }
    })

})