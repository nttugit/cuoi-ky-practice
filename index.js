import express from 'express';
// Thư viện giúp sử dụng biến môi trường trong file .env
import dotenv from 'dotenv';
dotenv.config(); //Khai ba

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000; //Mặc định là port 3000
// Kết nối database
import connectDB from './utils/db.js';

// XỬ LÝ ROUTES
import todoRouter from './routes/todo.route.js';

app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.use('/todos', todoRouter);

// Xử lý lỗi 404
app.use((req, res) => {
    res.status(404).json('Endpoint not found');
});

// Xử lý lỗi 500
app.use((err, req, res, next) => {
    res.status(500).json('Something went wrong');
});

// Chạy ứng dụng
app.listen(port, () => {
    console.log(`Big Ads server is listening on http://localhost:${port}`);
});
