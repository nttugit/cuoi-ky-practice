import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    completed: Boolean,
});

const Model = mongoose.model('todo', todoSchema);

export default Model;
