<template>
  <div id="app">
    <CreateToDo v-on:add-todo="addTodo($event)"/>
    <ToDoList v-bind:todos="todos"/>
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
        date: '1993-09-01',
        done: false
      }, {
        title: 'Todo B',
        date: '1993-09-01',
        done: true
      }, {
        title: 'Todo C',
        date: '1993-09-01',
        done: false
      }, {
        title: 'Todo D',
        date: '1993-09-01',
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
  font-size: 50px;
}
</style>
