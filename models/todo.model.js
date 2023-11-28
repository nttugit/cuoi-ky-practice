import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    completed: Boolean,
    // field image có kiểu dữ liệu String, giá trị mặc định là null
    image: { type: String, default: null },
});

// notes: đổi tên model ở đây, ví dụ 'todo' đổi thành 'product'
const Model = mongoose.model('todo', todoSchema);

export default Model;
