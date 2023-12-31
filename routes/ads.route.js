import express from 'express';
const router = express.Router();
import adsController from '../controllers/ads.controller.js';
// import { upload, resizeAndSaveImages } from '../utils/image.js';

// Lấy danh sách Ads Category
router.get('/', adsController.getAdsList);
// Lấy thông tin chi tiết một Ads Category
router.get('/:id', adsController.getAds);
// Tạo
router.post(
    '/',
    // upload.array('images'),
    // resizeAndSaveImages,
    adsController.postAds,
);
// Cập nhật
router.patch('/:id', adsController.patchAds);

// router.patch('/:id', adsController.patchAds);
// Xoá
router.delete('/:id', adsController.deleteAds);

export default router;
