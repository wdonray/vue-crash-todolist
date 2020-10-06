<template>
  <div class="item" :class="{ completed: todo.completed }">
    <p>
      <!-- <input type="checkbox" @change="markComplete" value="todo.completed" /> -->
      {{ todo.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
};
</script>

<style scoped>
.item {
  border: 1px solid #ccc;
  background: violet;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}

.del {
  background: tomato;
  color: white;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>