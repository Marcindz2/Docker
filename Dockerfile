# Etap 1: Budowanie aplikacji Angular
FROM node:20.19.0 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Etap 2: Serwowanie przez nginx
FROM nginx:alpine
COPY --from=build /app/dist/projdocker/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
