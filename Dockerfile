FROM node:8

# Create director
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy bundle resource
COPY . .

EXPOSE 3000
CMD [ "npm" , "start" ]
