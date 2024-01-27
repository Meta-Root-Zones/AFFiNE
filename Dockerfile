# Use an official Node.js image as a parent image
FROM node:18-alpine

RUN apk update && apk add --no-cache git

# Define build-time arguments
ARG BUILD_CONTEXT
ARG WORKSPACE

# Set the working directory in the container
WORKDIR /app

# Copy essential files first to leverage Docker cache
COPY package.json .
COPY yarn.lock .
COPY tests ./tests
COPY tools ./tools
COPY ./packages ./packages

# Copy the specific workspace package.json
# Ensure the directory exists before copying
RUN mkdir -p ./packages/${BUILD_CONTEXT}
COPY ./packages/${BUILD_CONTEXT}/package.json ./packages/${BUILD_CONTEXT}/

# Install dependencies
# It's more efficient to install all dependencies before copying the entire project
RUN yarn install

# Now copy the rest of the project
COPY . .

# Build the specified workspace
# Ensure the build command is correct, `build:$BUILD_CONTEXT` might be a placeholder
RUN yarn workspace ${WORKSPACE} build:${BUILD_CONTEXT}

# Set the command to run your server
CMD ["node", "--es-module-specifier-resolution=node", "./dist/index.js"]
