# To-Do List Application

## Descrição

Esta aplicação de Lista de Tarefas (To-Do List) é um projeto completo utilizando Node.js com Express para o backend e Vue.js para o frontend. A aplicação permite a gestão de tarefas com funcionalidades de adicionar, editar, visualizar e remover tarefas.

## Requisitos

- **Backend**:
  - Node.js com Express
  - API RESTful com as rotas:
    - `GET /tasks`: Retorna todas as tarefas
    - `POST /tasks`: Adiciona uma nova tarefa
    - `PUT /tasks/:id`: Atualiza uma tarefa existente
    - `DELETE /tasks/:id`: Remove uma tarefa
  - Banco de dados em memória (lista)

- **Frontend**:
  - Vue.js
  - TypeScript
  - Interface de usuário para:
    - Visualizar uma lista de tarefas
    - Adicionar uma nova tarefa
    - Editar uma tarefa existente
    - Remover uma tarefa
  - Chamadas à API para interação com o backend
  - Estilização básica com CSS 
## Tecnologias

- Node.js
- Express
- TypeScript
- Vue.js
- CSS

## Instalação

### Backend

1. Navegue até o diretório do backend:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

   O backend estará disponível em `http://localhost:5000`.

### Frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

   O frontend estará disponível em `http://localhost:3000`.

## Uso

1. Acesse a interface de usuário no navegador.
2. Utilize a interface para visualizar, adicionar, editar e remover tarefas.
3. As ações no frontend interagem com a API do backend para atualizar o estado das tarefas.

## Testes (Opcional)

Para rodar os testes, siga os seguintes passos:

### Backend

1. Navegue até o diretório do backend:
   ```bash
   cd backend
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

### Frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd frontend
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

## Documentação

A documentação do código está disponível nos comentários e nas instruções dentro dos arquivos de código.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Abra uma issue ou um pull request no repositório.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

## Contato

Se tiver dúvidas ou precisar de ajuda, entre em contato através de wgr.leao10@gmail.com ou https://www.linkedin.com/in/wagnergoncalvesribeiro.


