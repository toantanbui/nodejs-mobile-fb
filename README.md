1. Môi trường:
- Node.js v20.14.0

2. Cài đặt
- npm install
  
3. Trong mongoDB compass
- Tạo database tên là: app_fb, collection là object
  
4. Chạy dự án
- npm start

5. Những thư viện đã dùng
- "@babel/core", "@babel/node","@babel/preset-env": họ babel dùng để dịch mọi phiên bản js phù hợp với từng trình duyệt
- "body-parser": nhận dữ liệu request
- "buffer": chuyển ảnh dạng base64 sang binary hoặc ngược lại
- "dotenv": tạo tham số môi trường
- "ejs": tạo phần view cho nodejs, tư tượng như html
- "express": thư viện của nodejs
- "jsonwebtoken": dùng để bảo mật truy cập, tạo token, check token
- "lodash": kiểu tra mảng có rỗng hay không
- "mongoose": tạo collection mongodb, crud dữ liệu database, tạo index
- "nodemon": tự động khởi động lại web khi ctr+s