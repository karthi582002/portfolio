# Use the official Node.js image as a base
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that the Vite app will run on (default is 5173)
EXPOSE 5173

# Run the Vite app (use the `npm run dev` command for development)
CMD ["npm", "run", "dev"]
