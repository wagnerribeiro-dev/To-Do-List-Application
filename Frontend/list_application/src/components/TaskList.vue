<template>
  <div>
    <h1>Lista de Tarefas</h1>
    <AddTask @add="addTask" />
    <ul>
      <TaskItem 
        v-for="task in tasks" 
        :key="task.id" 
        :task="task" 
        @remove="removeTask" 
        @edit="editTask"
      />
    </ul>
    <EditTask 
      v-if="taskToEdit" 
      :task="taskToEdit" 
      @save="updateTask" 
      @cancel="cancelEdit"
    />
  </div>
</template>

<script>
import axios from 'axios';
import AddTask from './AddTask.vue';
import TaskItem from './TaskItem.vue';
import EditTask from './EditTask.vue';

export default {
  components: {
    AddTask,
    TaskItem,
    EditTask
  },
  data() {
    return {
      tasks: [],
      taskToEdit: null
    };
  },
  methods: {
    fetchTasks() {
      axios.get('http://localhost:3333/tasks')
        .then(response => {
          this.tasks = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    addTask(task) {
      axios.post('http://localhost:3333/tasks', task)
        .then(response => {
          this.tasks.push(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    removeTask(id) {
      axios.delete(`http://localhost:3333/tasks/${id}`)
        .then(response => {
          this.tasks = this.tasks.filter(task => task.id !== id);
        })
        .catch(error => {
          console.error(error);
        });
    },
    editTask(task) {
      this.taskToEdit = task;
    },
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
      this.taskToEdit = null;
    }
  },
  mounted() {
    this.fetchTasks();
  }
};
</script>

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
