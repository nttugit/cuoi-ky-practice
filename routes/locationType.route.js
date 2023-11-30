import express from 'express';
const router = express.Router();
import locationTypeController from '../controllers/locationType.controller.js';

// Lấy danh sách Location type
router.get('/', locationTypeController.getLocationTypes);
// Lấy thông tin chi tiết một Location type
router.get('/:id', locationTypeController.getLocationType);
// Tạo
router.post('/', locationTypeController.postLocationType);
// Cập nhật
router.patch('/:id', locationTypeController.patchLocationType);
// Xoá
router.delete('/:id', locationTypeController.deleteLocationType);

export default router;
