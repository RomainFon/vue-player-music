<template>
  <div>
    <ul v-if="todos.length > 0">
      <li v-for="(todo, index) in todos" :key="index">{{ todo.title }}</li>
    </ul>
    <p v-else>Chargement...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => (this.todos = json));
  },
};
</script>