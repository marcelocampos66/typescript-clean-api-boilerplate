FROM node:18.12.1

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env .

RUN npm run build

EXPOSE 3001:3001

CMD ["npm", "start"]
