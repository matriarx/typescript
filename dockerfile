ARG TAG=18-alpine

FROM node:$TAG as typescript-dev

ARG PORT=80

WORKDIR /app

COPY . .

RUN yarn install  --frozen-lockfile --immutable --immutable-cache --check-cache --link-duplicates --ignore-scripts --force --inline-builds --verbose
RUN yarn cache clean --all

EXPOSE $PORT

CMD yarn dev
