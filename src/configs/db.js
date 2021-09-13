const {Pool} = require("pg")
const {Sequelize} = require("sequelize")

const pool = new Pool({
    user: (process.env.NODE_ENV == "test") ? process.env.DB_USERS_TEST : (process.env.NODE_ENV == "dev") ? process.env.DB_USERS_DEV : process.env.DB_USERS_PROD,
    host: (process.env.NODE_ENV == "test") ? process.env.DB_HOST_TEST : (process.env.NODE_ENV == "dev") ? process.env.DB_HOST_DEV : process.env.DB_HOST_PROD,
    database: (process.env.NODE_ENV == "test") ? process.env.DB_NAME_TEST : (process.env.NODE_ENV == "dev") ? process.env.DB_NAME_DEV : process.env.DB_NAME_PROD,
    password: (process.env.NODE_ENV == "test") ? process.env.DB_PASS_TEST : (process.env.NODE_ENV == "dev") ? process.env.DB_PASS_DEV : process.env.DB_PASS_PROD,
    port: 5432
})

const orm = new Sequelize({
    username: (process.env.NODE_ENV == "test") ? process.env.DB_USERS_TEST : (process.env.NODE_ENV == "dev") ? process.env.DB_USERS_DEV : process.env.DB_USERS_PROD,
    database: (process.env.NODE_ENV == "test") ? process.env.DB_NAME_TEST : (process.env.NODE_ENV == "dev") ? process.env.DB_NAME_DEV : process.env.DB_NAME_PROD,
    password: (process.env.NODE_ENV == "test") ? process.env.DB_PASS_TEST : (process.env.NODE_ENV == "dev") ? process.env.DB_PASS_DEV : process.env.DB_PASS_PROD,
    host: (process.env.NODE_ENV == "test") ? process.env.DB_HOST_TEST : (process.env.NODE_ENV == "dev") ? process.env.DB_HOST_DEV : process.env.DB_HOST_PROD,
    port: 5432,
    dialect: "postgres",
    logging: false,
})

module.exports = { pool , orm}