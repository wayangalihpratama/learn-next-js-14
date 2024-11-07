# Use the official Node.js image.
FROM node:18-alpine

# Set the working directory.
WORKDIR /app

# Copy package.json and package-lock.json (if available).
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of your application code.
COPY . .

# Expose the port the app runs on.
EXPOSE 3000

# Start the Next.js application in development mode.
CMD ["npm", "run", "dev"]