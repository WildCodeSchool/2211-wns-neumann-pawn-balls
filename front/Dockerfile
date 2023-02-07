FROM node:16.19-alpine

RUN npm i -g pnpm

RUN mkdir /app
WORKDIR /app
COPY package*.json .
COPY pnpm* .
COPY .npmrc .

RUN pnpm i

COPY src ./src
COPY public ./public
COPY tsconfig.json .

CMD pnpm start
