/**
 * notes:
 * - nhớ import đúng model dưới đây
 * - resp là kết quả trả về khi thao tác với database, cứ giữ nguyên tên biến cho dễ
 */

import Model from '../models/adsLocation.model.js';
import AdsCategoryModel from '../models/adsCategory.model.js';
import LocationTypeModel from '../models/locationType.model.js';

const controller = {};

// Lấy danh sách
controller.getAdsLocations = async (req, res) => {
    /**
   *    Tham chiếu lấy thông tin của Ads Category bằng populate()
        path: tên field muốn tham chiếu,
        select: những field muốn lấy, để đơn giản thì không cần cái này cũng được
   */
    const resp = await Model.find({}).populate([
        {
            path: 'adsCategory',
            // match: { age: { $gte: 21 } },
            select: 'name',
        },
        { path: 'locationType' },
    ]);
    return res.status(200).json(resp);
};

controller.getAdsLocation = async (req, res) => {
    const { id } = req.params;
    const resp = await Model.findById(id);
    return res.status(200).json(resp);
};

controller.postAdsLocation = async (req, res) => {
    // Dữ liệu sẽ được tạo xuống DB
    const data = { ...req.body, completed: false };
    const resp = await Model.create(data);
    return res.status(200).json(resp);
};

controller.patchAdsLocation = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    // new: true để trả về giá trị mới
    const resp = await Model.findOneAndUpdate({ _id: id }, data, { new: true });
    return res.status(200).json(resp);
};

controller.deleteAdsLocation = async (req, res) => {
    const { id } = req.params;
    const resp = await Model.findOneAndDelete({ _id: id });
    return res.status(200).json(resp);
};

export default controller;
