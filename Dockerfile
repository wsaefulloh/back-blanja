FROM node:14.17

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm install -g nodemon

EXPOSE 9000

CMD [ "npm", "start" ]