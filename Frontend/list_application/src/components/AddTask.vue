<template>
  <div>
    <h2>Adicionar Nova Tarefa</h2>
    <form @submit.prevent="addTask">
      <input v-model="title" placeholder="Título" required />
      <input v-model="description" placeholder="Descrição" required />
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: ''
    };
  },
  methods: {
    addTask(task) {
      axios.post('http://localhost:3333/tasks', task)
        .then(response => {
          this.tasks.push(response.data);
        })
        .catch(error => {
          console.error(error);
        });
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
</style>
