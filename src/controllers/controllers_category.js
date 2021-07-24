const category = {}
const model = require('../models/models_category')
const respone = require('../helpers/respone')
const { redisDb } = require("../configs/redis")

category.getAll = async (req, res) => {
    try {
        const result = await model.GetAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

category.addData = async (req, res) => {
    try {
        const object = await (req.body)
        const data = {
            name_category : object.name_category,
            id : object.id_category
        }
        const result = await model.AddData(data)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

category.updateData = async (req, res) => {
    try {
        const object = await (req.body)
        const data = {
            name_category : object.name_category,
            id : object.id_category
        }
        const result = await model.UpdateData(data)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

category.removeData = async (req, res) => {
    try {
        const result = await model.DeleteData(req.params.id_category)
        redisDb.del("product")
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

module.exports = category