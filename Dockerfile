FROM node:alpine

WORKDIR /usr/app

COPY package*.json /.

RUN npm install

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "start:dev"]