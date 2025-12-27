FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# copy all .json files
COPY package*.json ./

RUN npm install

# Copy all files from current directory to working directory inside the container
COPY . .


EXPOSE 3000

# start backend 

CMD [ "npm", "run"  ,"dev" ]
