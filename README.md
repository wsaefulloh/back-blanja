<h1 align="center">Blanja RESTful API with Express</h1>
<p align="center">
    <a href="https://blanja-site.netlify.app//" target="blank">View Demo</a>
  · <a href="https://github.com/wsaefulloh/back-blanja/issues">Report Bug</a>
  · <a href="https://github.com/wsaefulloh/back-blanja/pulls">Request Feature</a>
</p>

Blanja RESTfull API is a RESTfull API that will provide the data needed by the [Front End](https://github.com/wsaefulloh/front-blanja) of the Blanja website. The API is designed in a minimalist and flexible way with the use of Express.Js. [More about Express](https://en.wikipedia.org/wiki/Express.js). Blanja is an E-Commerce application that makes it easy for us to make online buying and selling transactions anywhere and anytime. Built with React Js on the front end, Node Js and Express Js on the back end. This application has two roles, such as seller and customer. As a seller in this application you can add, delete and update the items you want to sell. As a customer in this application you can add the items you want to buy into the bag to find out the details of the total payment.

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v.13.3-blue.svg?style=rounded-square)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-v.6.2-red.svg?style=rounded-square)](https://redis.io/)

## Feature
- CRUD
- ORM Sequelize
- MVC Models
- Search and Filter
- Authentication and Authorization
- Upload File (Image)
- File Logging
- Unit Testing
- Integration Testing

## Installation Steps

1. Clone the repository

   ```bash
    https://github.com/wsaefulloh/back-blanja
    ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Add .env file at root folder project

   ```sh
   DB_USERS = your_users_name
   DB_HOST  = your_server_host
   DB_NAME  = your_database_name
   DB_TEST  = your_database_test_name
   DB_PASS  = your_password
   
   JWT_KEYS = your_JWT_password_keys
   
   CLOUD_NAME = your_cloud_username
   CLOUD_KEYS = your_cloud_keys
   CLOUD_SECRETS = your_cloud_secrets
   
   REDIS_HOST = your_server_host
   REDIS_PASS = your_redis_password
   ```

4. Test the app

   ```bash
   npm test
   ```


5. Run the app

   ```bash
   npm start
   ```

6. You are all set!

   ```bash
   Backend running at: http://localhost:9000
   ```


## Frontend Repository
Frontend API : Blanja - Frontend [here](https://github.com/wsaefulloh/front-blanja)


## End Point
You can see all the end point [here](https://documenter.getpostman.com/view/16508598/Tzm3nGrT)


## License
© [Wahyu Saefulloh](https://github.com/wsaefulloh/)
