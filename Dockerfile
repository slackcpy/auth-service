FROM node:13.12.0-alpine as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3002
EXPOSE 4000

CMD ["yarn", "run", "start:dev"]