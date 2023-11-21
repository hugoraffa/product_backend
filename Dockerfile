FROM node:latest

WORKDIR /app

COPY src/ .

RUN npm install

CMD [ "node", "app.js" ]


