# Use the official Node.js latest image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /backend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application's source code to the container
COPY . .

# Expose the port that the application listens on
EXPOSE 3009

# Start the Node.js application
CMD [ "npm", "start" ]
