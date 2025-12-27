# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json (agar hai)
COPY package*.json ./

# 4. Install dependencies
RUN npm install --production

# 5. Copy the rest of the app
COPY . .

# 6. Expose port (default 3000)
EXPOSE 3000

# 7. Start the app
CMD ["node", "api/index.js"]
