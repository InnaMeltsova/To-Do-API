# Different stages, layers
FROM node:18 As development
# Working directory in a laptop, will be created if no such directory
WORKDIR /usr/src/app
#copy these files to the working directory above
COPY package*.json ./
# run this command.
RUN npm install
# copy all the files to the container
COPY . .
# just for documentation, optional field
EXPOSE 5000

FROM node:18-alpine as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
# tell the container which command it should run when it's started
CMD ["npm", "start"]

# Dockerfile contains instructions for creating an Image

#  Commands - 
# docker images - to see images that are available locally
# docker ps (same as docker container ls) - list of containers
# docker rm - remove one or more containers
# docker-compose up - create and start containers
# docker-compose down - stop and remove containers, networks, images, and volumes