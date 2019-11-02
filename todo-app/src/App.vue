<template>
  <div id="app">
    <ToDoList v-bind:todos="todos"/>
    <CreateToDo v-on:add-todo="addTodo($event)"/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList'
import CreateToDo from './components/CreateTodo'

export default {
  name: 'App',
  components: {
    ToDoList,
    CreateToDo
  },
  methods: {
    addTodo (toDo) {
      this.todos.push(toDo)
    }
  },
  data () {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
