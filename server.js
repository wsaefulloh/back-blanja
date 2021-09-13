require('custom-env').env();
const dotenv = require("dotenv")
const server = require("./app");
const PORT = 9000;

// if (process.env.NODE_ENV === "dev") {
//     dotenv.config({ path: './.env.development' })
// }
if (process.env.NODE_ENV === "prod") {
    dotenv.config({ path: './.env' })
}
// if (process.env.NODE_ENV === "test") {
//     dotenv.config({ path: './.env' })
// }

const {orm : database} = require('./src/configs/db');
const {pool : db} = require('./src/configs/db')
const redis = require("./src/configs/redis")

async function init() {
    try {
        await database.authenticate()
        await db.connect()
        const msg = await redis.check()
        await database.sync({alter : true}) 
        
        server.listen(PORT, () => {
            console.log(`Conection to Database Success`)
            console.log(msg)
            console.log(`Service running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error.message)
        process.exit(1)
        
    }
}

init()