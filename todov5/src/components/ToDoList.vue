<template>
  <div>
    <!-- <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p> -->
    <todo v-on:delete-todo="deleteTodo" v-on:uncomplete-todo="uncompleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id"></todo>
  </div>
</template>

<script type = "text/javascript" >

import Todo from './Todo'

export default {
  props: ['todos'],
  components: {
    Todo
  },
  methods: {
    deleteTodo (todo) {
      this.removeNotification(todo)
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    },
    completeTodo (todo) {
      this.removeNotification(todo)
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = true
      localStorage.todos = JSON.stringify(this.todos)
    },
    uncompleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = false
      localStorage.todos = JSON.stringify(this.todos)
    },
    removeNotification (todo) {
      // remove notification code here
    }
  }
}
</script>
