<template>
  <div class="d-flex justify-content-between align-items-center">
    <a @click="toggleComplete" href="#" class="text-decoration-none block flex-grow-1">
      <span :class="taskNameStyles">{{ task.name }}</span>
      
    </a>
    <div>
      <button @click="changeEdit" class="btn btn-sm btn-secondary me-2">
        <span v-if="!isEdit">Edit</span>
        <span v-if="isEdit">Cancel</span>
      </button>
      <button @click="deleteTask(task.id)" class="btn btn-sm btn-danger">Delete</button>
    </div>
  </div>

  <form v-if="isEdit" @submit.prevent="updateTask" class="my-3">
    <div class="input-group">
      <input
        v-model="newTaskName"
        type="text"
        class="form-control"
        placeholder="Task name"
        required
      />
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  </form>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    taskId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const isEdit = ref(false);
    const newTaskName = ref('');

    const task = computed(() => store.state.tasks.find((t) => t.id === props.taskId));

    const updateTask = () => {
      const updatedTask = { ...task.value, name: newTaskName.value };
      store.commit('updateTask', updatedTask);
      newTaskName.value = '';
      isEdit.value = false;
    };

    const deleteTask = (taskId) => {
      store.commit('deleteTask', taskId);
    };

    const changeEdit = () => {
      isEdit.value = !isEdit.value;
    };

    const toggleComplete = () => {
      const isComplete = task.value.isComplete;
      const updatedTask = { ...task.value, isComplete: !isComplete };
      store.commit('updateTask', updatedTask);
    };

    const taskNameStyles = computed(() => ({
      'text-body': true,
      'text-decoration-line-through': task.value.isComplete,
      'text-decoration-none': !task.value.isComplete,
    }));

    return {
      task,
      updateTask,
      deleteTask,
      isEdit,
      changeEdit,
      newTaskName,
      toggleComplete,
      taskNameStyles,
    };
  },
};
</script>
