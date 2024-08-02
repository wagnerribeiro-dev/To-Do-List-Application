"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_memory_1 = require("./database_memory");
const app = (0, express_1.default)();
const port = 3333;
const database = new database_memory_1.DatabaseMemory();
app.use(express_1.default.json());
app.post('/tasks', (req, res) => {
    const { title, description, duration } = req.body;
    database.create({ title, description, duration });
    return res.status(201).send();
});
app.get('/tasks', (req, res) => {
    const search = req.query.search;
    const tasks = database.list(search);
    return res.json(tasks);
});
app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const { title, description, duration } = req.body;
    database.update(taskId, { title, description, duration });
    return res.status(204).send();
});
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    database.delete(taskId);
    return res.status(204).send();
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
