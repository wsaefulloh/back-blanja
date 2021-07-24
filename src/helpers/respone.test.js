const respone = require("./respone")

const res = {
    obj : {},
    statusCode: 0,
    status(code){
        this.statusCode = code
        return this
    },
    json(data){
        this.obj = data
        return this
    }
}

describe("helpers/respone", () => {
    test ("should return array of object", () => {
        const check = respone(res, 200, {msg : "hallo world"})
        const {result} = check.obj
        expect(result).toHaveLength(1)
    })
})