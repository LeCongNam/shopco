# Sử dụng hình ảnh Node.js chính thức làm nền tảng
FROM node:alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm ci

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Biến môi trường để chỉ định chế độ sản xuất
ENV NODE_ENV=production

# Biên dịch ứng dụng Next.js
RUN npm run build

# Mở cổng 3000 để truy cập ứng dụng
EXPOSE 3001

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]
