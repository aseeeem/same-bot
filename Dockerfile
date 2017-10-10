FROM node:8.6-alpine
COPY ./src /app
WORKDIR /app
RUN npm install
ENTRYPOINT [ "npm", "start", "-s" ]