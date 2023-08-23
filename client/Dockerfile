FROM node:16.19-alpine


RUN mkdir /app
WORKDIR /app

COPY package*.json .
COPY .npmrc .

RUN npm i

COPY src ./src
COPY public ./public
COPY tsconfig.json .
COPY codegen.yml .

CMD npm start
