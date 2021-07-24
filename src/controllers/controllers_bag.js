const bag = {}
const model = require('../models/models_bag')
const respone = require('../helpers/respone')

bag.getAll = async (req, res) => {
    try {
        const result = await model.GetAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

bag.addData = async (req, res) => {
    try {
        const object = await (req.body)
        const data = {
            id_product : object.id_product,
            count : object.count
        }
        const result = await model.AddData(data)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

bag.updateData = async (req, res) => {
    try {
        const object = await (req.body)
        const data = {
            id : object.id,
            count : object.count
        }
        const result = await model.UpdateData(data)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

bag.removeData = async (req, res) => {
    try {
        const result = await model.DeleteData(req.params.id_bag)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

module.exports = bag