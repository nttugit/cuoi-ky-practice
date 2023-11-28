import TodoModel from '../models/todo.model.js';

const controller = {};

// Lấy danh sách
controller.getTodos = async (req, res) => {
    const todos = await TodoModel.find();
    return res.status(200).json(todos);
};

controller.getTodo = async (req, res) => {
    const { id } = req.params;
    const todoList = await TodoModel.findById(id);
    return res.status(200).json(todoList);
};

controller.postTodo = async (req, res) => {
    const newTodo = await TodoModel.create(req.body);
    newTodo.completed = false;
    return res.status(200).json(newTodo);
};

controller.patchTodo = async (req, res) => {
    const updatedTodo = await TodoModel.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
    );
    // const todo = await TodoModel.findOne({})
    console.log({ id: req.params.id }, { ...req.body });
    return res.status(200).json(updatedTodo);
};

controller.deleteTodo = async (req, res) => {
    const resp = await TodoModel.deleteOne({ _id: req.params.id });
    return res.status(200).json(resp);
};

export default controller;
