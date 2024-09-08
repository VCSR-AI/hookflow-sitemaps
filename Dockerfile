FROM node:lts-slim

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Copy package.json and pnpm-lock.yaml, then install dependencies with pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --force

# Copy the rest of the application code
COPY . .

# Expose the port your application is running on
EXPOSE 3000

# Start the application using the start script from package.json
CMD ["pnpm", "start"]
