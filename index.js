// Các thư viện cơ bản, mọi người cứ giữ nguyên
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// notes: đổi port nểu muốn
const port = process.env.PORT || 3000; //Mặc định là port 3000

// XỬ LÝ ROUTES

// Biển quảng cáo
import adsRouter from './routes/ads.route.js';
// Địa điểm đặt quảng cáo
import adsLocationRouter from './routes/adsLocation.route.js';
// Hình thức quảng cáo
import adsCategoryRouter from './routes/adsCategory.route.js';
// Loại điểm điểm đặt quảng cáo
import locationTypeRouter from './routes/locationType.route.js';
// Loại bảng quảng cáo
import billboardType from './routes/billboardType.route.js';

// Các routes khác
import imageRouter from './routes/image.route.js';

app.get('/', (req, res) => {
    res.status(200).json('Hello World!');
});

app.use('/ads', adsRouter);
app.use('/ads-locations', adsLocationRouter);
app.use('/ads-categories', adsCategoryRouter);
app.use('/location-types', locationTypeRouter);
app.use('/billboard-types', billboardType);
app.use('/images', imageRouter);

// Xử lý lỗi 404
app.use((req, res) => {
    res.status(404).json('Endpoint not found');
});

// Xử lý lỗi 500
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json('Something went wrong');
});

// Chạy ứng dụng
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
