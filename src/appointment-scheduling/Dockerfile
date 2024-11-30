FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install @nestjs/platform-express
RUN npm install -g @nestjs/cli
COPY . .

CMD ["npm", "run", "start"]
EXPOSE 3000
