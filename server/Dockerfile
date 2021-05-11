# syntax=docker/dockerfile:1

FROM node:14.16.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 8080 

# CMD [ "npm", "start" ]
RUN npm install pm2 -g

CMD ["pm2-runtime", "src/server.js"]
