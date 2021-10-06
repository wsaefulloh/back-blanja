const {orm} = require('../configs/db')
const {pool : db} = require('../configs/db')
const {DataTypes, where, Op, Sequelize} = require("sequelize")
const product = require("./models_product")

class Bag{
    constructor(){
        this.table = orm.define("bags", {
            id:{
                type: DataTypes.INTEGER,
                allowNull:false,
                autoIncrement: true,
                primaryKey: true
            },
            username:{
                type: DataTypes.STRING,
                allowNull: true
            },
            id_product:{
                type: DataTypes.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: "products",
                    key:"id",
                }
            },
            count:{
                type: DataTypes.INTEGER,
                allowNull: false
            }          
        },{
            timestamps: false
        }
        )
        this.table.belongsTo(product.table, {
            foreignKey : 'id_product',
            as: 'detail_product',
        })
    }

    GetAll() {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                order: [["id","DESC"]],
                include: [{
                    model: product.table,
                    as: 'detail_product'
                }]
            }).then(res => {
                const productJSON = res
                const dataProduct = productJSON.map((data) => {
                const total_Price = data.count * data.detail_product.price_product
                const object = {
                    id_bag : data.id,
                    id_product : data.id_product,
                    name_product : data.detail_product.name_product,
                    brand_product : data.detail_product.brand_product,
                    store_product : data.detail_product.store_product,
                    image_product : data.detail_product.image_product,
                    count : data.count,
                    totalPrice : total_Price
                }
                return object;
            })
                resolve(dataProduct)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }

    AddData(data) {
        return new Promise((resolve,reject) => {
            this.table.create(data)
            .then(res => {
                resolve('Add product to bag success')
            }).catch(err => {
                reject(err)
            })
        })
    }

    UpdateData(data){
        return new Promise((resolve,reject) => {
            this.table.update({
                count : data.count,
            },{
                where : {
                    id : data.id
                }
            })
            .then((res) => {
                resolve('Update bag success')
            }).catch((err) => {
                reject(err.message)
            })
        })
    }

    DeleteData(id_del) {
        return new Promise((resolve,reject) => {
            db.query(`DELETE FROM public.bags WHERE id = ${id_del}`)
            .then(res => {
                resolve('Delete product in bag success')
            }).catch(err => {
                reject(err)
            })
        })
    }

    GetbyUsernameBag(username) {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                order: [["id","DESC"]],
                include: [{
                    model: product.table,
                    as: 'detail_product'
                }],
                where: {
                    username : username
                },
            }).then(res => {
                const productJSON = res
                const dataProduct = productJSON.map((data) => {
                const total_Price = data.count * data.detail_product.price_product
                const object = {
                    id_bag : data.id,
                    id_product : data.id_product,
                    name_product : data.detail_product.name_product,
                    brand_product : data.detail_product.brand_product,
                    store_product : data.detail_product.store_product,
                    image_product : data.detail_product.image_product,
                    count : data.count,
                    totalPrice : total_Price
                }
                return object;
            })
                resolve(dataProduct)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }

}

module.exports = new Bag()