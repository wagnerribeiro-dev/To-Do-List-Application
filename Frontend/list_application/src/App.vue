<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/tasks">Tasks</router-link>
      <!-- Adicione mais links conforme necessário -->
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import TaskList from './components/TaskList.vue';

export default {
  name: 'App'
}
</script>

<style>
nav {
  padding: 1rem;
  background-color: #f8f9fa;
}

nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #007bff;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>

