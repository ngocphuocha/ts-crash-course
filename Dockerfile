FROM node:18

WORKDIR /app

RUN npm install -g ts-node

COPY package.json .
COPY yarn.lock .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]