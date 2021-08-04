const products = {}
const model = require('../models/models_product')
const respone = require('../helpers/respone')
const uploads = require('../helpers/uploadCloud')
const moment = require('moment-timezone')
const { redisDb } = require("../configs/redis")

products.getAll = async (req, res) => {
    try {
        const result = await model.GetAll()
        const data = JSON.stringify(result)
        redisDb.setex("product", 30, data)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyName = async (req, res) => {
    try {
        const result = await model.SortbyName()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyDate = async (req, res) => {
    try {
        const result = await model.SortbyDate()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyPriceASC = async (req, res) => {
    try {
        const result = await model.SortbyPriceASC()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyPriceDESC = async (req, res) => {
    try {
        const result = await model.SortbyPriceDESC()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyCategory = async (req, res) => {
    try {
        const result = await model.SortbyCategory(req.params.name_category)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

products.searchbyName = async (req, res) => {
    try {
        const result = await model.SearchbyName(req.query.name_product)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

products.addData = async (req, res) => {
    try {
        let urlImage = 'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png'
        if (req.file !== undefined) {
            urlImage = await uploads(req.file.path)
        } 
        const object = await (req.body)
        const dateString = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
        const data = {
            name_product : object.name_product,
            price_product : object.price_product,
            brand_product : object.brand_product, 
            image_product : urlImage || req.file.path,
            store_name : object.store_name,
            id_category : object.id_category,
            description : object.description,
            createdAt : dateString,
            updatedAt : dateString
        }
        const result = await model.AddData(data)
        redisDb.del("product")
        return respone(res, 201, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

products.updateData = async (req, res) => {
    try {
        let urlImage = 'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png'
        if (req.file !== undefined) {
            urlImage = await uploads(req.file.path)
        } 
        const object = await (req.body)
        const dateString = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
        const data = {
            id : object.id,
            name_product : object.name_product,
            price_product : object.price_product,
            brand_product : object.brand_product, 
            image_product : urlImage || req.file.path,
            store_name : object.store_name,
            id_category : object.id_category,
            description : object.description,
            updatedAt : dateString
        }
        const result = await model.UpdateData(data)
        redisDb.del("product")
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.removeData = async (req, res) => {
    try {
        const result = await model.DeleteData(req.params.id_product)
        redisDb.del("product")
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.getByID = async (req, res) => {
    try {
        const result = await model.GetbyID(req.params.id_product)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

module.exports = products