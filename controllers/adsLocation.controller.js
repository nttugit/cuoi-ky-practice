/**
 * notes:
 * - nhớ import đúng model dưới đây
 * - resp là kết quả trả về khi thao tác với database, cứ giữ nguyên tên biến cho dễ
 */
import Model from '../models/adsLocation.model.js';

const controller = {};

// Lấy danh sách
controller.getAdsLocations = async (req, res) => {
    const conditions = {};
    const result = await Model.findAll(conditions);
    res.status(200).json(result);
};

// Lấy thông tin chi tiết
controller.getAdsLocation = async (req, res) => {
    const id = req.params.id || 0;
    const adsLocation = await Model.findById(id);
    if (adsLocation === null) {
        return res.status(204).end();
    }
    res.status(200).json(adsLocation);
};

// Tạo mới
controller.postAdsLocation = async (req, res) => {
    let data = req.body;

    const ret = await Model.add(data);
    data = {
        location_type_id: ret[0],
        ...data,
    };
    res.status(201).json(data);
};

// Cập nhật
controller.patchAdsLocation = async (req, res) => {
    const id = req.params.id || 0;
    const data = req.body;
    const found = await Model.findById(id);
    if (found === null) {
        // Nhớ return để kết thúc request
        return res.status(204).end();
    }

    const affectedRecords = await Model.patch(id, data);
    return res.status(200).json({
        affected: affectedRecords,
    });
};

// Xoá
controller.deleteAdsLocation = async (req, res) => {
    const id = req.params.id || 0;
    const found = await Model.findById(id);
    if (found === null) {
        // Nhớ return để kết thúc request
        return res.status(204).end();
    }
    const affectedRecords = await Model.del(id);
    return res.status(200).json({
        affected: affectedRecords,
    });
};

export default controller;
