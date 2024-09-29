FROM node:20.14.0

WORKDIR /app

COPY package.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
