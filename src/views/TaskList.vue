<template>
  <div>
    <h2 class="mb-4">Task List</h2>
    <form @submit.prevent="createTask" class="mb-3">
      <div class="input-group">
        <input
          v-model="taskName"
          type="text"
          class="form-control"
          placeholder="Task name"
          required
        />
        <button type="submit" class="btn btn-primary">Create Task</button>
      </div>
    </form>

    <ul class="list-group">
      <li v-for="task in tasks" :key="task.id" class="list-group-item">
        <task-item :taskId="task.id" />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import TaskItem from './TaskItem.vue';

export default {
  setup() {
    const taskName = ref('');
    const store = useStore();

    const tasks = store.state.tasks;

    const createTask = () => {
      const task = { id: Date.now(), name: taskName.value };
      store.commit('addTask', task);
      taskName.value = '';
    };

    return { taskName, tasks, createTask };
  },
  components: { TaskItem },
};
</script>
