import express from 'express';
const router = express.Router();
import imageController from '../controllers/image.controller.js';
import { upload, resizeAndSaveImages } from '../utils/image.js';

// Lấy danh sách thông tin json
router.get('/', imageController.getImages);
// Lấy ảnh bằng tên ảnh
router.get('/:imageName', imageController.getImage);
// Tạo
router.post(
    '/upload',
    upload.array('images'),
    resizeAndSaveImages,
    imageController.postImage,
);

// Xoá
router.delete('/:imageName', imageController.deleteImage);

export default router;
