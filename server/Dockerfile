FROM node:20

WORKDIR /index

COPY package.json package-lock.json ./

RUN npm install

#Copy the rest of the application code to the container
COPY . .

EXPOSE 5000

CMD ["npm", "start"]
