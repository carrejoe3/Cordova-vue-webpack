<template>
  <div>
    <!-- <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p> -->
    <todo v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id"></todo>
  </div>
</template>

<script type = "text/javascript" >

import Todo from './Todo'

export default {
  components: {
    Todo
  },
  computed: {
    todos () {
      return this.$store.getters.sortedTodos
    }
  }
}

</script>
