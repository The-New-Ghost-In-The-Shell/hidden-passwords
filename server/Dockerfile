FROM node:20.18.0-alpine3.20
RUN npm install -g pnpm
WORKDIR /server/
COPY package*.json ./
RUN pnpm install
COPY . .
EXPOSE 3000
CMD ["node", "./index.js"]