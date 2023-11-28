import express from 'express';
const router = express.Router();
import adsLocationController from '../controllers/adsLocation.controller.js';

// Lấy danh sách Ads Location
router.get('/', adsLocationController.getAdsLocations);
// Lấy thông tin chi tiết một Ads Locations
router.get('/:id', adsLocationController.getAdsLocation);
// Tạo
router.post('/', adsLocationController.postAdsLocation);
// Cập nhật
router.patch('/:id', adsLocationController.patchAdsLocation);
// Xoá
router.delete('/:id', adsLocationController.deleteAdsLocation);

export default router;
