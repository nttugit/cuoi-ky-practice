import express from 'express';
const router = express.Router();
import imageController from '../controllers/image.controller.js';
import { upload, uploadAndResizeImages } from '../utils/image.js';

// Lấy danh sách thông tin json
router.get('/', imageController.getImages);
// Lấy ảnh
router.get('/:imageName', imageController.getImage);
// Tạo
router.post(
    '/upload',
    upload.array('images'),
    uploadAndResizeImages,
    (req, res) => {
        // const { customerData } = req;
        res.status(201).json('Uploaded');
    },
);

// Xoá
router.delete('/:imageName', imageController.deleteImage);


export default router;
