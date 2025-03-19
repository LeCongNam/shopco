# Sử dụng hình ảnh Node.js chính thức với Alpine
FROM node:alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép tệp package.json và yarn.lock vào thư mục làm việc
COPY package.json yarn.lock ./

# Cài đặt các phụ thuộc với Yarn
RUN yarn install --frozen-lockfile

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Biến môi trường để chỉ định chế độ sản xuất
ENV NODE_ENV=production

# Biên dịch ứng dụng Next.js
RUN yarn build

# Mở cổng 3001 để truy cập ứng dụng
EXPOSE 3001

# Lệnh khởi chạy ứng dụng
CMD ["yarn", "start"]
