# Stage 1: Build Angular Universal app
FROM node:18-alpine AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json để cài đặt dependencies
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn của dự án vào container
COPY . .

# Build Angular app cho SSR
RUN npm run build

# Stage 2: Create production image
FROM node:18-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép file build từ Stage 1
COPY --from=build /app/dist /app/dist

# Sao chép lại package.json và cài đặt dependencies cho production
COPY --from=build /app/package*.json ./
RUN npm install --only=production

# Expose cổng mà ứng dụng sẽ chạy
EXPOSE 4000

# Command để chạy server-side ứng dụng
CMD ["node", "dist/server/server.mjs"]
