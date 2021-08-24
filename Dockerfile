FROM node:14.17.3-alpine3.11
LABEL maintainer="TemplateExpress"

ENV NODE_ENV=development
ENV APP_ROOT /home/app/
ENV PORT 3003

RUN npm install -g typeorm

RUN adduser -h ${APP_ROOT} -D app
USER app

WORKDIR ${APP_ROOT}
COPY package* ${APP_ROOT}
RUN npm install
COPY . ${APP_ROOT}
EXPOSE ${PORT}

CMD [ "node", "build/server.js" ]
