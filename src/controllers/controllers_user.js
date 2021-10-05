const users = {}
const model = require('../models/models_user')
const respone = require('../helpers/respone')
const bcr = require("bcrypt")
const passwordHash = require('../helpers/hash')
const jwt = require("jsonwebtoken")

users.getAll = async (req, res) => {
    try {
        const result = await model.GetAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

users.getUsername = async (req, res) => {
    try {
        const result = await model.GetbyUsername1(req.params.username)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

users.addData = async (req, res) => {
    try {
        const available = await model.GetbyUsername(req.body.username)
        if (available.length !== 0) {
            return respone(res, 500, 'username already use')
        } else {
            const passHash = await passwordHash(req.body.password)
            const data = {
            id : req.body.id_users,
            name : req.body.name_users,
            username : req.body.username,
            password : passHash,
            role : req.body.role
        }
        const result = await model.AddData(data)
        return respone(res, 201, result)
        }
        
    } catch (error) {
        return respone(res, 500, error)
    }
}

users.updateData = async (req, res) => {
    try {
        const {token_auth} = req.headers
        return jwt.verify(token_auth, process.env.JWT_KEYS, async (err, decode) => {
            const username = decode.user
            const oldData = await model.GetbyUsername(username)
            const passUser = req.body.old_password
            const check = await bcr.compare(passUser,oldData[0].password)
            if (check) {
                const passHash = await passwordHash(req.body.new_password)
                const data = {
                    name : req.body.name_users,
                    password : passHash,
                    role : req.body.role,
                    username : username,
                    email : data.email,
                    alamat : data.alamat,
                }
                const result = await model.UpdateData(data)
                return respone(res, 201, result)
            } else{
                return respone(res, 500, 'Update failed, old_password wrong')
            }
        })
    } catch (error) {
        return respone(res, 500, error)
    }
}

users.removeData = async (req, res) => {
    try {
        const available = await model.GetbyUsername(req.query.username)
        if (available.length === 0) {
            return respone(res, 500, 'delete failed, username not registered')
        } else {
            const result = await model.DeleteData(req.query.username)
            return respone(res, 200, result)
        }
    } catch (error) {
        return respone(res, 500, error)
    }
}

module.exports = users