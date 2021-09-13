const redis = require("redis")
class Redis {
    constructor() {
        this.redisDb = redis.createClient({
            host: (process.env.NODE_ENV == "test") ? process.env.REDIS_HOST_TEST : (process.env.NODE_ENV == "dev") ? process.env.REDIS_HOST_DEV : process.env.REDIS_HOST_PROD,
            port: 6379,
            password: (process.env.NODE_ENV == "test") ? process.env.REDIS_PASS_TEST : (process.env.NODE_ENV == "dev") ? process.env.REDIS_PASS_DEV : process.env.REDIS_PASS_PROD,
        })
    }

    check() {
        return new Promise((resolve, reject) => {
            this.redisDb.get("testkey", (err, res) => {
                if (err) {
                    reject(err)
                }

                if (res === "OK" || res === null) {
                    resolve("Connection to Redis Successfully")
                }
            })
        })
    }
}

module.exports = new Redis()