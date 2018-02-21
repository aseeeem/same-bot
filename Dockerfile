FROM node:8.9-alpine
RUN apk update && apk add git
COPY ./ /app
WORKDIR /app
RUN npm install
ENTRYPOINT [ "npm", "start", "-s" ]