import { randomUUID } from 'crypto';

interface Task {
    title: string;
    description?: string;
    duration?: string;
}

export class DatabaseMemory {
    private tasks = new Map<string, Task>();

    list(search?: string): Array<{ id: string, title: string, description?: string, duration?: string }> {
        return Array.from(this.tasks.entries())
            .map(([id, data]) => ({ id, ...data }))
            .filter(task => {
                if (search) {
                    return task.title.includes(search);
                }
                return true;
            });
    }

    create(task: Task): void {
        const taskId = randomUUID();
        this.tasks.set(taskId, task);
    }

    update(id: string, task: Task): void {
        this.tasks.set(id, task);
    }

    delete(id: string): void {
        this.tasks.delete(id);
    }
}
