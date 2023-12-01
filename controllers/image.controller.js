/**
 * notes:
 * - nhớ import đúng model dưới đây
 * - Upload ảnh là nâng cao
 */
import path from 'path';
const __dirname = path.resolve();

import Model from '../models/image.model.js';
const model = new Model();

const controller = {};

// Lấy danh sách
controller.getImages = async (req, res) => {
    const conditions = {};
    const result = await model.getAll(conditions);
    res.status(200).json(result);
};

// Lấy thông tin chi tiết
controller.getImage = async (req, res) => {
    const { imageName } = req.params;
    const image = await model.getOne({ file_name: imageName });
    if (!image) {
        return res.status(204).end();
    }
    const filePath = path.join(__dirname, image.path);

    res.status(200).sendFile(filePath);
};

// Tạo
controller.postImage = async (req, res) => {
    res.status(200).json(req.fileNames);
};

// Xoá
controller.deleteImage = async (req, res) => {
    const { imageName } = req.params;
    const found = await model.getOne({ file_name: imageName });
    if (!found) {
        // Nhớ return để kết thúc request
        return res.status(204).end();
    }
    const affectedRecords = await model.deleteById(found.image_id);
    return res.status(200).json({
        affected: affectedRecords,
    });
};

export default controller;
