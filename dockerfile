FROM node:14.12.0-alpine

RUN mkdir producer-service

WORKDIR /producer-service

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]