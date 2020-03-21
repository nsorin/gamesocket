FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
COPY gulpfile.js ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
