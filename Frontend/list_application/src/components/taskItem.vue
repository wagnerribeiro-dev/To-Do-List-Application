<template>
  <div class="task-item">
    <span>{{ task.title }}</span>
    <button @click="editTask">Edit</button>
    <button @click="removeTask">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<{ id: string; title: string }>,
      required: true
    }
  },
  methods: {
    editTask() {
      this.$emit('edit', this.task.id);
    },
    removeTask() {
      this.$emit('remove', this.task.id);
    }
  }
});
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
