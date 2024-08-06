<template>
  <div>
    <h2>Editar Tarefa</h2>
    <form @submit.prevent="saveTask">
      <input v-model="title" placeholder="Título" required />
      <input v-model="description" placeholder="Descrição" required />
      <button type="submit">Salvar</button>
      <button @click.prevent="cancelEdit">Cancelar</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      title: this.task.title,
      description: this.task.description
    };
  },
  methods: {
  updateTask(task) {
      axios.put(`http://localhost:3333/tasks/${task.id}`, task)
        .then(response => {
          const index = this.tasks.findIndex(t => t.id === task.id);
          this.$set(this.tasks, index, response.data);
          this.taskToEdit = null;
        })
        .catch(error => {
          console.error(error);
        });
    },
    cancelEdit() {
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  font-size: 1em;
}

button {
  padding: 10px;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

button[type="button"] {
  background-color: #6c757d;
}

button[type="button"]:hover {
  background-color: #5a6268;
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