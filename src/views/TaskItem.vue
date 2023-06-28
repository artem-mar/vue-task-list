<template>
  <div class="d-flex justify-content-between align-items-center">
    {{ task.name }}
    <div>
      <button @click="changeEdit" class="btn btn-sm btn-secondary me-2">Edit</button>
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

    const updateTask = () => {
      const updatedTask = { id: props.taskId, name: newTaskName.value };
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

    return {
      task: computed(() => store.state.tasks.find((t) => t.id == props.taskId)),
      updateTask,
      deleteTask,
      isEdit,
      changeEdit,
      newTaskName,
    };
  },
};
</script>
