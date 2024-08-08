import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Certifique-se de que o caminho para o arquivo do roteador está correto

const app = createApp(App);

app.use(router);

app.mount('#app');
