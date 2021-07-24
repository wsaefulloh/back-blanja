const {orm} = require('../configs/db')
const {DataTypes} = require("sequelize")

class Categori{
    constructor(){
        this.table = orm.define("categories", {
            id:{
                type: DataTypes.INTEGER,
                allowNull:false,
                primaryKey: true
            },
            name_category:{
                type: DataTypes.STRING,
                allowNull: false
            }            
        },{
            timestamps: false
        }
        )
    }

    GetAll() {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                order: [["id","DESC"]]
            }).then(res => {
                const productJSON = res
                const dataProduct = productJSON.map((data) => {
                const object = {
                    id_category : data.id,
                    name_category : data.name_category,
                }
                return object;
            })
                resolve(dataProduct)
            }).catch(err => {
                reject(err.message)
            })
        })
    }

    AddData(data) {
        return new Promise((resolve,reject) => {
            this.table.create(data)
            .then(res => {
                resolve('Add category success')
            }).catch(err => {
                reject(err.message)
            })
        })
    }

    UpdateData(data){
        return new Promise((resolve,reject) => {
            this.table.update({
                name_category : data.name_category,
            },{
                where : {
                    id : data.id
                }
            })
            .then((res) => {
                resolve('Update category success')
            }).catch((err) => {
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
                resolve('Delete category success')
            }).catch(err => {
                reject(err)
            })
        })
    }

}

module.exports = new Categori()