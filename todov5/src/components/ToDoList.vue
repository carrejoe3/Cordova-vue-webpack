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
  methods: {
    completeTodo (todo) {
      this.$store.commit('completeTodo', todo)
    },
    uncompleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = false
      localStorage.todos = JSON.stringify(this.todos)
      this.$emit('schedule-notification', todo)
    },
    scheduleNotification (todo) {
      this.$emit('schedule-notification', todo)
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}

</script>
