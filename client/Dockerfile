FROM  node:20.12.2-alpine3.19
RUN npm install -g pnpm
WORKDIR /client/
COPY package*.json ./
RUN pnpm install
COPY . .
EXPOSE 5173
CMD ["pnpm","run", "dev"]