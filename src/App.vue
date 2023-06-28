<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">Task Manager</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tasks" class="nav-link">Task List</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <div class="container mt-4 flex-grow-1">
    <router-view></router-view>
  </div>

  <footer class="bg-light text-center py-3 mt-4">
    Created by <a href="https://github.com/artem-mar" target="_blank">Artem Marin</a>
  </footer>
</template>

<script>
export default {
  name: 'App',
};
</script>
