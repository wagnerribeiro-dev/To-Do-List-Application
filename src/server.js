const express = require('express');
const app = express();
const port = 3333;
const { DatabaseMemory } = require('../dist/database_memory');

const database = new DatabaseMemory();

app.use(express.json());

app.post('/tasks', (req, res) => {
    const { title, description, duration } = req.body;

    database.create({
        title,
        description,
        duration,
    });

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

    console.log(`Updating task ${taskId} with`, { title, description, duration });

    database.update(taskId, {
        title,
        description,
        duration,
    });

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

