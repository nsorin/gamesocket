FROM node:12 as build-stage

WORKDIR /usr/src/app

RUN npm install -g @angular/cli@8.3.19

COPY *.json ./
COPY karma.conf.js ./
COPY src ./src
COPY e2e ./e2e

RUN npm install
RUN ng build --prod

FROM nginx:1.15

COPY --from=build-stage /usr/src/app/dist/client /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf