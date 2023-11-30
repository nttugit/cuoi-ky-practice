/**
 * notes:
 * - nhớ import đúng model dưới đây
 */
import Model from '../models/adsCategory.model.js';
const model = new Model();

const controller = {};

// Lấy danh sách
controller.getAdsCategories = async (req, res) => {
    const conditions = {};
    const result = await model.getAll(conditions);
    res.status(200).json(result);
};

// Lấy thông tin chi tiết
controller.getAdsCategory = async (req, res) => {
    const id = parseInt(req.params.id) || 0;
    const adsCategory = await model.getById(id);
    if (!adsCategory) {
        return res.status(204).end();
    }
    res.status(200).json(adsCategory);
};

// Tạo mới
controller.postAdsCategory = async (req, res) => {
    let data = req.body;

    const ret = await model.create(data);
    data = {
        ads_category_id: ret[0],
        ...data,
    };
    res.status(201).json(data);
};

// Cập nhật
controller.patchAdsCategory = async (req, res) => {
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
controller.deleteAdsCategory = async (req, res) => {
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
