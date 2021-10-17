FROM node:14.17

WORKDIR /usr/src/app

ENV NEW_RELIC_NO_CONFIG_FILE=true

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn add nodemon

EXPOSE 9000

CMD [ "npm" , "start" ]