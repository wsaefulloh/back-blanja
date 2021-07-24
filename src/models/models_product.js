const {orm} = require('../configs/db')
const {DataTypes, where, Op, Sequelize} = require("sequelize")
const category = require("./models_category")

class Products{
    constructor(){
        this.table = orm.define("products", {
            id:{
                type: DataTypes.INTEGER,
                allowNull:false,
                autoIncrement:true,
                primaryKey: true
            },
            name_product:{
                type: DataTypes.STRING,
                allowNull: false
            },
            price_product:{
                type: DataTypes.STRING,
                allowNull: false
            },
            brand_product:{
                type: DataTypes.STRING,
                allowNull: false
            },
            store_name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            image_product:{
                type: DataTypes.STRING,
                allowNull: true
            },
            id_category:{
                type: DataTypes.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: "categories",
                    key:"id",
                }
            },
            createdAt:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            updatedAt:{
                type: DataTypes.STRING,
                allowNull: false,
            }
        },{
            timestamps: false
        }
        )
        this.table.belongsTo(category.table, {
            foreignKey : 'id_category',
            as: 'category',
        })
    }

    GetAll() {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                order: [["createdAt","DESC"]],
                include: [{
                    model: category.table,
                    as: 'category'
                }]
            }).then(res => {
                const productJSON = res
                const dataProduct = productJSON.map((data) => {
                const object = {
                    id_product : data.id,
                    name_product : data.name_product,
                    price_product : data.price_product,
                    brand_product : data.brand_product,
                    store_product : data.store_product,
                    image_product : data.image_product,
                    id_category : data.category.id,
                    category : data.category.name_category,
                    createdAt : data.createdAt,
                    updatedAt : data.updatedAt
                }
                return object;
            })
                resolve(dataProduct)
            }).catch(err => {
                console.log(err)
                reject(err.message)
            })
        })
    }

    SortbyName() {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                order: [["name_product","ASC"]],
                include: [{
                    model: category.table,
                    as: 'category'
                }]
            }).then(res => {
                const productJSON = res
                const dataProduct = productJSON.map((data) => {
                const object = {
                    id_product : data.id,
                    name_product : data.name_product,
                    price_product : data.price_product,
                    brand_product : data.brand_product,
                    store_product : data.store_product,
                    image_product : data.image_product,
                    id_category : data.category.id,
                    category : data.category.name_category,
                    createdAt : data.createdAt,
                    updatedAt : data.updatedAt
                }
                return object;
            })
                resolve(dataProduct)
            }).catch(err => {
                console.log(err)
                reject(err.message)
            })
        })
    }

    SortbyDate() {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                order: [["updatedAt","DESC"]],
                include: [{
                    model: category.table,
                    as: 'category'
                }]
            }).then(res => {
                const productJSON = res
                const dataProduct = productJSON.map((data) => {
                const object = {
                    id_product : data.id,
                    name_product : data.name_product,
                    price_product : data.price_product,
                    brand_product : data.brand_product,
                    store_product : data.store_product,
                    image_product : data.image_product,
                    id_category : data.category.id,
                    category : data.category.name_category,
                    createdAt : data.createdAt,
                    updatedAt : data.updatedAt
                }
                return object;
            })
                resolve(dataProduct)
            }).catch(err => {
                console.log(err)
                reject(err.message)
            })
        })
    }

    SortbyPriceASC() {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                order: [["price_product","ASC"]],
                include: [{
                    model: category.table,
                    as: 'category'
                }]
            }).then(res => {
                const productJSON = res
                const dataProduct = productJSON.map((data) => {
                const object = {
                    id_product : data.id,
                    name_product : data.name_product,
                    price_product : data.price_product,
                    brand_product : data.brand_product,
                    store_product : data.store_product,
                    image_product : data.image_product,
                    id_category : data.category.id,
                    category : data.category.name_category,
                    createdAt : data.createdAt,
                    updatedAt : data.updatedAt
                }
                return object;
            })
                resolve(dataProduct)
            }).catch(err => {
                console.log(err)
                reject(err.message)
            })
        })
    }

    SortbyPriceDESC() {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                order: [["price_product","DESC"]],
                include: [{
                    model: category.table,
                    as: 'category'
                }]
            }).then(res => {
                const productJSON = res
                const dataProduct = productJSON.map((data) => {
                const object = {
                    id_product : data.id,
                    name_product : data.name_product,
                    price_product : data.price_product,
                    brand_product : data.brand_product,
                    store_product : data.store_product,
                    image_product : data.image_product,
                    id_category : data.category.id,
                    category : data.category.name_category,
                    createdAt : data.createdAt,
                    updatedAt : data.updatedAt
                }
                return object;
            })
                resolve(dataProduct)
            }).catch(err => {
                console.log(err)
                reject(err.message)
            })
        })
    }

    SortbyCategory(categori) {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                order: [["createdAt","DESC"]],
                include: [{
                    model: category.table,
                    as: 'category',
                    where:{
                        name_category:{
                            [Op.iLike] : `%${categori}%`
                        }
                    }
                }]
            }).then(res => {
                const productJSON = res
                const dataProduct = productJSON.map((data) => {
                const object = {
                    id_product : data.id,
                    name_product : data.name_product,
                    price_product : data.price_product,
                    brand_product : data.brand_product,
                    store_product : data.store_product,
                    image_product : data.image_product,
                    id_category : data.category.id,
                    category : data.category.name_category,
                    createdAt : data.createdAt,
                    updatedAt : data.updatedAt
                }
                return object;
            })
                resolve(dataProduct)
            }).catch(err => {
                reject(err.message)
            })
        })
    }

    SearchbyName(name) {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                where : {
                    name_product:{
                        [Op.iLike] : `%${name}%`
                    }
                },
                order: [["createdAt","DESC"]],
                include: [{
                    model: category.table,
                    as: 'category',
                }]
            }).then(res => {
                const productJSON = res
                const dataProduct = productJSON.map((data) => {
                const object = {
                    id_product : data.id,
                    name_product : data.name_product,
                    price_product : data.price_product,
                    brand_product : data.brand_product,
                    store_product : data.store_product,
                    image_product : data.image_product,
                    id_category : data.category.id,
                    category : data.category.name_category,
                    createdAt : data.createdAt,
                    updatedAt : data.updatedAt
                }
                return object;
            })
                resolve(dataProduct)
            }).catch(err => {
                reject(err.message)
            })
        })
    }

    DeleteData(id_del) {
        return new Promise((resolve,reject) => {
            this.table.destroy({
                where: {
                    id : id_del
                }
            })
            .then(res => {
                resolve('Delete product success')
            }).catch(err => {
                reject(err.message)
            })
        })
    }

    UpdateData(data){
        return new Promise((resolve,reject) => {
            this.table.update({
                name_product : data.name_product,
                price_product : data.price_product,
                brand_product : data.brand_product,
                store_name : data.store_name,
                image_product: data.image_product,
                id_category : data.id_category,
                updatedAt : data.updatedAt
            },{
                where : {
                    id : data.id
                }
            })
            .then((res) => {
                resolve('Update product success')
            }).catch((err) => {
                reject(err.message)
            })
        })
    }

    AddData(data) {
        return new Promise((resolve,reject) => {
            this.table.create(data)
            .then(res => {
                resolve('Add product success')
            }).catch(err => {
                reject(err.message)
            })
        })
    }

}

module.exports = new Products()