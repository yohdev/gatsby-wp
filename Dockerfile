FROM node:15-alpine

WORKDIR "/app"

COPY --chown=node:node ./package.json ./

COPY . .
