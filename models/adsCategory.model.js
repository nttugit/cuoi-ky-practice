import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AdsCategorySchema = new Schema(
    {
        name: String,
    },
    { versionKey: false },
);

// Nên đặt tên db có xếp gạch để mongo hiển thị dễ nhìn
const Model = mongoose.model('ads_category', AdsCategorySchema);

export default Model;
