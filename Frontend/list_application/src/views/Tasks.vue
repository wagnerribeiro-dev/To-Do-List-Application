<template>
  <div>
    <h1>Tasks</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="editTask(task.id)">Edit</button>
        <button @click="removeTask(task.id)">Delete</button>
      </li>
    </ul>
    <button @click="showAddTaskForm = true">Add New Task</button>
    <div v-if="showAddTaskForm">
      <h2>Add New Task</h2>
      <input v-model="newTaskTitle" placeholder="Task title" />
      <button @click="addTask">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Tasks',
  setup() {
    const tasks = ref([
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' }
    ]);

    const showAddTaskForm = ref(false);
    const newTaskTitle = ref('');

    function addTask() {
      if (newTaskTitle.value.trim()) {
        tasks.value.push({
          id: tasks.value.length + 1,
          title: newTaskTitle.value
        });
        newTaskTitle.value = '';
        showAddTaskForm.value = false;
      }
    }

    function editTask(taskId: number) {
      console.log('Edit task:', taskId);
    }

    function removeTask(taskId: number) {
      tasks.value = tasks.value.filter(task => task.id !== taskId);
    }

    return {
      tasks,
      showAddTaskForm,
      newTaskTitle,
      addTask,
      editTask,
      removeTask
    };
  }
});
</script>

<style scoped>
</style>
