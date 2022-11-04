# Base image
FROM node:14-alpine

WORKDIR /home/app

# Install dependencies
COPY ./package.json ./
RUN npm install

# Update app files
COPY ./ ./

# Default command
CMD ["npm", "start"]