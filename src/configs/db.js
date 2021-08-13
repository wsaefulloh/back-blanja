const {Pool} = require("pg")
const {Sequelize} = require("sequelize")

const pool = new Pool({
    user: process.env.DB_USERS,
    host: process.env.DB_HOST,
    database: (process.env.NODE_ENV == "test") ? process.env.DB_TEST : process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: 5432
})

const orm = new Sequelize({
    username: process.env.DB_USERS,
    database: (process.env.NODE_ENV == "test") ? process.env.DB_TEST : process.env.DB_NAME,
    password: process.env.DB_PASS,
    host:process.env.DB_HOST,
    port: 5432,
    dialect: "postgres",
    logging: false,
})

module.exports = { pool , orm}