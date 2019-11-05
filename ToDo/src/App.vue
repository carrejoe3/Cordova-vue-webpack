<template>
  <div id="app">
    <CreateToDo v-on:add-todo="addTodo($event)" v-bind:categories="categories"/>
    <ToDoList v-bind:todos="todos" v-bind:categories="categories"/>
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
        done: false,
        category: ''
      }, {
        title: 'Todo B',
        date: '1993-09-01',
        done: true,
        category: 'example'
      }, {
        title: 'Todo C',
        date: '1993-09-01',
        done: false,
        category: ''
      }, {
        title: 'Todo D',
        date: '1993-09-01',
        done: false,
        category: ''
      }],
      categories: [{
        name: 'example1'
      }, {
        name: 'example2'
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
  font-size: 1em;
}
.container {
  margin-bottom: 2%;
}
.ui.segment, .ui.button.icon {
  font-size: 2em;
}
.ui.button {
  font-size: 1em;
}
.ui.form .field>label, .ui.form .field>input, .ui.button.createBtn, .ui.button.cancelBtn, .ui.button.closeBtn {
  font-size: 2em;
}
.ui.form .field>input {
  font-size: 2em;
}
.header {
  font-weight: 700;
}
.header, .meta, .ui.form .field>label, .ui.form .field>input, .ui.button.createBtn {
  margin-bottom: 1em;
}
.icons {
  display: flex;
  justify-content: space-between;
}
.ui.button {
  background: none;
  margin-right: 0px;
  margin-left: 0px;
  width: 100%;
}
</style>
