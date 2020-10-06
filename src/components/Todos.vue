<template>
  <div>
    <h2 class="header">To Do List</h2>
    <div class="todos">
      <div :key="todo.id" v-for="todo in getTodos">
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    TodoItem,
  },
  methods: { ...mapActions(["fetchTodos"]) },
  computed: { ...mapGetters(["getTodos"]) },
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.header {
  color: black;
  text-decoration: underline;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>