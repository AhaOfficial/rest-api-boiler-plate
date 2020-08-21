FROM node:lts-buster

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=80
ENV PORT $PORT

EXPOSE $PORT

RUN apt-get install tzdata && ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

RUN npm i -g npm

RUN mkdir -p /home/app
WORKDIR /home/app

COPY ./build ./
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci --only=production

CMD [ "node", "build/app.js" ]