<template>
  <div>
    <TaskForm @submit="addTask" />
    <div v-if="tasks.length">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @edit="editTask"
        @remove="removeTask"
      />
    </div>
    <div v-else>No tasks available</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TaskItem from '@/components/TaskItem.vue';
import TaskForm from '@/components/TaskForm.vue';

export default defineComponent({
  components: { TaskItem, TaskForm },
  setup() {
    const tasks = ref<{ id: string; title: string }[]>([]);

    function addTask(title: string) {
      // Call API to add task
      // tasks.value.push({ id: newId, title });
    }

    function editTask(id: string) {
      // Handle task edit
    }

    function removeTask(id: string) {
      // Call API to remove task
      // tasks.value = tasks.value.filter(task => task.id !== id);
    }

    return { tasks, addTask, editTask, removeTask };
  }
});
</script>
