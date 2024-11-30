# Use the official Node.js image based on Alpine for a smaller image size
FROM node:16-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to the container
COPY package*.json ./

# Install dependencies (including global @nestjs/cli if needed)
RUN npm install
RUN npm install -g @nestjs/cli
RUN npm install @nestjs/platform-express

# Copy the rest of the application files into the container
COPY . .

# Ensure the app listens on the correct port
ENV PORT=3000

# Expose port 3000 to be accessed outside the container
EXPOSE 3000

# Command to run the NestJS application
CMD ["npm", "run", "start"]

