import express from 'express';
const router = express.Router();
import todoController from '../controllers/todo.controller.js';

// Lấy danh sách todos
router.get('/', todoController.getTodos);
// Lấy thông tin chi tiết
router.get('/:id', todoController.getTodo);
// Tạo
router.post('/', todoController.postTodo);
// Cập nhật
router.patch('/:id', todoController.patchTodo);
// Xoá
router.delete('/:id', todoController.deleteTodo);

export default router;
