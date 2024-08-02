<template>
  <form @submit.prevent="submitForm">
    <input v-model="title" placeholder="Enter task title" />
    <button type="submit">{{ isEdit ? 'Update' : 'Add' }}</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

export default defineComponent({
  props: {
    initialTitle: {
      type: String,
      default: ''
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const title = ref(props.initialTitle);

    function submitForm() {
      if (title.value.trim() === '') return;
      emit('submit', title.value);
      title.value = '';
    }

    return { title, submitForm };
  }
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 10px;
}
</style>
