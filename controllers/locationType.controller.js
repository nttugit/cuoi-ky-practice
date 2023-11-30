/**
 * notes:
 * - nhớ import đúng model dưới đây
 */
import Model from '../models/locationType.model.js';
const model = new Model();

const controller = {};

// Lấy danh sách
controller.getLocationTypes = async (req, res) => {
    const conditions = {};
    const result = await model.getAll(conditions);
    res.status(200).json(result);
};

// Lấy thông tin chi tiết
controller.getLocationType = async (req, res) => {
    const id = parseInt(req.params.id) || 0;
    const locationType = await model.getById(id);
    if (!locationType) {
        return res.status(204).end();
    }
    res.status(200).json(locationType);
};

// Tạo mới
controller.postLocationType = async (req, res) => {
    let data = req.body;

    const ret = await model.create(data);
    data = {
        location_type_id: ret[0],
        ...data,
    };
    res.status(201).json(data);
};

// Cập nhật
controller.patchLocationType = async (req, res) => {
    const id = parseInt(req.params.id) || 0;
    const data = req.body;
    const found = await model.getById(id);
    if (!found) {
        // Nhớ return để kết thúc request
        return res.status(204).end();
    }

    const affectedRecords = await model.updateById(id, data);
    return res.status(200).json({
        affected: affectedRecords,
    });
};

// Xoá
controller.deleteLocationType = async (req, res) => {
    const id = parseInt(req.params.id) || 0;
    const found = await model.getById(id);
    if (!found) {
        // Nhớ return để kết thúc request
        return res.status(204).end();
    }
    const affectedRecords = await model.deleteById(id);
    return res.status(200).json({
        affected: affectedRecords,
    });
};

export default controller;
