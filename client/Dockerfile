FROM node:12

WORKDIR /usr/src/app

RUN npm install -g @angular/cli@8.3.19

COPY *.json ./
COPY karma.conf.js ./
COPY src ./src
COPY e2e ./e2e

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]