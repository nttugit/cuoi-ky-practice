/**
 * notes:
 * - nhớ import đúng model dưới đây
 */
import Model from '../models/adsLocation.model.js';
const model = new Model();

const controller = {};

// Lấy danh sách
controller.getAdsLocations = async (req, res) => {
    const conditions = {};
    // Join các table khác
    // join = [ref_tableName, field, operator, ref_field]
    const joins = [
        ['ads_category', 'ads_category', '=', 'ads_category_id'],
        ['location_type', 'location_type', '=', 'location_type_id'],
    ];
    //  notes: Chú ý khi cần lấy thông tin các table khác mới sử dụng hàm này, còn không cứ sài hàm getAll()
    const result = await model.getAllWithJoin(conditions, joins);
    res.status(200).json(result);
};

// Lấy thông tin chi tiết
controller.getAdsLocation = async (req, res) => {
    const id = parseInt(req.params.id) || 0;
    const joins = [
        ['ads_category', 'ads_category', '=', 'ads_category_id'],
        ['location_type', 'location_type', '=', 'location_type_id'],
    ];

    const adsLocation = await model.getByIdWithJoin(id, joins);
    if (!adsLocation) {
        return res.status(204).end();
    }
    res.status(200).json(adsLocation);
};

// Tạo mới
controller.postAdsLocation = async (req, res) => {
    let data = req.body;

    const ret = await model.create(data);
    data = {
        ads_location_id: ret[0],
        ...data,
    };
    res.status(201).json(data);
};

// Cập nhật
controller.patchAdsLocation = async (req, res) => {
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
controller.deleteAdsLocation = async (req, res) => {
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
