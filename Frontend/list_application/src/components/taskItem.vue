<template>
  <li>
    <span>{{ task.title }}</span> - <span>{{ task.description }}</span>
    <button @click="editTask">Editar</button>
    <button @click="removeTask">Remover</button>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
        removeTask(id) {
      axios.delete(`http://localhost:3333/tasks/${id}`)
        .then(response => {
          this.tasks = this.tasks.filter(task => task.id !== id);
        })
        .catch(error => {
          console.error(error);
        });
    }
    editTask() {
      this.$emit('edit', this.task);
    },
    removeTask() {
      this.$emit('remove', this.task.id);
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

button {
  margin-left: 10px;
}
</style>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>