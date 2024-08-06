import { createRouter, createWebHistory } from 'vue-router';
import Home from './src/views/Home.vue';
import Tasks from './src/views/Tasks.vue';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/tasks', component: Tasks, name: 'Tasks' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


