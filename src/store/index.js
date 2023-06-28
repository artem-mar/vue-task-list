import { createStore } from 'vuex';

const getTasksFromLocalStorage = () => JSON.parse(localStorage.getItem('tasks')) || [];
const setTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const store = createStore({
  state: {
    tasks: getTasksFromLocalStorage(),
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      setTasksToLocalStorage(state.tasks);
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
      setTasksToLocalStorage(state.tasks);
    },
    deleteTask(state, taskId) {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
      setTasksToLocalStorage(state.tasks);
    },
  },
});

export default store;
