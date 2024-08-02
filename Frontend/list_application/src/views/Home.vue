<template>
  <div>
    <h1>Welcome to To-Do List App</h1>
    <router-link to="/tasks">Go to Tasks</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>
