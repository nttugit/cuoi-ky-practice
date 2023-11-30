/**
 * notes:
 * - nhớ import đúng model dưới đây
 */
import Model from '../models/ads.model.js';
const model = new Model();

import { convertToMySqlDate } from '../utils/date.js';

const controller = {};

// Lấy danh sách
controller.getAdsList = async (req, res) => {
    const conditions = {};
    // Join các table khác
    // join = [ref_tableName, field, operator, ref_field]
    const joins = [
        ['ads_location', 'ads_location', '=', 'ads_location_id'],
        ['billboard_type', 'billboard_type', '=', 'billboard_type_id'],
    ];

    //  notes: Chú ý khi cần lấy thông tin các table khác mới sử dụng hàm này, còn không cứ sài hàm getAll()
    const result = await model.getAllWithJoin(conditions, joins);
    res.status(200).json(result);
};

// Lấy thông tin chi tiết
controller.getAds = async (req, res) => {
    const id = parseInt(req.params.id) || 0;
    const joins = [
        ['ads_location', 'ads_location', '=', 'ads_location_id'],
        ['billboard_type', 'billboard_type', '=', 'billboard_type_id'],
    ];

    const ads = await model.getByIdWithJoin(id, joins);
    if (!ads) {
        return res.status(204).end();
    }
    res.status(200).json(ads);
};

// Tạo mới
controller.postAds = async (req, res) => {
    let data = req.body;
    data.start_date = convertToMySqlDate(data.start_date);
    data.end_date = convertToMySqlDate(data.end_date);
    const ret = await model.create(data);
    data = {
        ads_id: ret[0],
        ...data,
    };
    res.status(201).json(data);
};

// Cập nhật
controller.patchAds = async (req, res) => {
    const id = parseInt(req.params.id) || 0;
    const data = req.body;
    data.start_date = convertToMySqlDate(data.start_date);
    data.end_date = convertToMySqlDate(data.end_date);
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
controller.deleteAds = async (req, res) => {
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
