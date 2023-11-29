import express from 'express';
const router = express.Router();
import locationTypeController from '../controllers/locationType.controller.js';

// Lấy danh sách Ads Location
router.get('/', locationTypeController.getLocationTypes);
// Lấy thông tin chi tiết một Ads Locations
router.get('/:id', locationTypeController.getLocationType);
// Tạo
router.post('/', locationTypeController.postLocationType);
// Cập nhật
router.patch('/:id', locationTypeController.patchLocationType);
// Xoá
router.delete('/:id', locationTypeController.deleteLocationType);

export default router;
