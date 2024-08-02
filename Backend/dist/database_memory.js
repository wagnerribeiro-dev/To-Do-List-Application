"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMemory = void 0;
const crypto_1 = require("crypto");
class DatabaseMemory {
    constructor() {
        this.tasks = new Map();
    }
    list(search) {
        return Array.from(this.tasks.entries())
            .map(([id, data]) => (Object.assign({ id }, data)))
            .filter(task => {
            if (search) {
                return task.title.includes(search);
            }
            return true;
        });
    }
    create(task) {
        const taskId = (0, crypto_1.randomUUID)();
        this.tasks.set(taskId, task);
    }
    update(id, task) {
        this.tasks.set(id, task);
    }
    delete(id) {
        this.tasks.delete(id);
    }
}
exports.DatabaseMemory = DatabaseMemory;
