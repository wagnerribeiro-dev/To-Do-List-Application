import { randomUUID } from "node:crypto";

export class DatabaseMemory {
    #tasks = new Map(); 

    list(search) {
        return Array.from(this.#tasks.entries())
            .map(([taskId, taskData]) => ({ 
                id: taskId,
                ...taskData,
            }))
            .filter(task => {
                if (search) {
                    return task.title.includes(search);
                }
                return true;
            });
    }

    create(task) {
        const taskId = randomUUID(); 
        this.#tasks.set(taskId, task);
    }

    update(id, task) { 
        this.#tasks.set(id, task);
    }

    delete(id) {
        this.#tasks.delete(id);
    }
}
