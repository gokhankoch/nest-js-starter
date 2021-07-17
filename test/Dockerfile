# Pull node image from docker hub
FROM node:latest
# Set working directory
WORKDIR /app
# install and cache app dependencies
COPY ./package.json ./
# install and cache app dependencies
RUN npm install
# Copy existing application directory contents
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "start:prod"]