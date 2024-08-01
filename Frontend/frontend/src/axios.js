import axios from '../axios';

export const addTask = async (task) => {
  try {
    const response = await axios.post('/tasks', task);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

export const getTasks = async () => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};


export const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`/tasks/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
  }
};


export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

const instance = axios.create({
  baseURL: 'http://localhost:333/', 
  timeout: 1000, 
});

export default instance;
