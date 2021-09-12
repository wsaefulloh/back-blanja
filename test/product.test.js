const app = require("../app")
const request = require("supertest")

const standartRespone = {
    status : expect.any(Number),
    description: expect.any(String),
    result : expect.any(Array)
}

describe("service /products", () => {
    describe("GET /products", () => {
        test("should return status code 200", async () => {
            const respone = await request(app).get("/product/all")
            expect(respone.status).toBe(200)
        })
        test("should return with respone standart", async () => {
            const respone = await request(app).get("/product/all")
            expect(respone.body).toEqual(expect.objectContaining(standartRespone))
        })
    })

    // describe("POST /products", () => {
    //     test("should return status code 201", async () => {
    //         const respone = await (await request(app).post("/product/add").send({
    //             name_product : "name product",
    //             price_product : 120000,
    //             brand_product : "brand_product",
    //             store_name : "store_name",
    //             id_category : 1,
    //             image : ""
    //         }))
    //         expect(respone.status).toBe(201)
    //     })
    // })

    describe("DELETE /products", () => {
        test("should return status code 200", async () => {
            const respone = await (await request(app).delete("/product/del/1"))
            expect(respone.status).toBe(200)
        })
    })

    describe("PUT /products", () => {
        test("should return status code 201", async () => {
            const respone = await (await request(app).put("/product/update").send({
                id : 2,
                name_product : "name product",
                price_product : 120000,
                brand_product : "brand_product",
                store_name : "store_name",
                id_category : 1,
                image : ""
            }))
            expect(respone.status).toBe(201)
        })
    })
})