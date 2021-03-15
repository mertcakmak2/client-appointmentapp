# develop stage
FROM node:latest as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.18.0 as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
