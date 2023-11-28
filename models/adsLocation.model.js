import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const adsLocationSchema = new Schema(
    {
        // Để đơn giản, ở đây dùng địa chỉ kiểu string
        address: String,
        // Khi tham chiếu, kiểu dữ liệu là ObjectId
        locationType: { type: Schema.Types.ObjectId, ref: 'location_type' },
        adsCategory: { type: Schema.Types.ObjectId, ref: 'ads_category' },
        isPlanned: { type: Boolean, default: false }, // Quy hoạch
        editVersion: { type: Number, default: 1 },
        /**
         * 0: Còn trống,
         * 1: Đang hoạt động,
         * 2: Chờ cấp phép,
         * 3: Ẩn,
         * 4: Đã xoá (không còn sài chỗ này nữa)}
         */
        status: { type: Number, enum: [0, 1, 2, 3, 4], default: 2 },
    },
    { versionKey: false },
);

const Model = mongoose.model('ads_location', adsLocationSchema);

export default Model;
