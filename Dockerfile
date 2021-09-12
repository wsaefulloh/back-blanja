FROM node:14.17

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 9000

CMD [ "node" , "server.js" ]