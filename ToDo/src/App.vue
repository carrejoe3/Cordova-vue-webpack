<template>
  <div id="app">
      <div v-if="cordova && !cordova.deviceready" class="alert">
        The `deviceready` event has not been triggered.
        <br>
        Check the <a href="https://github.com/kartsims/vue-cordova#troubleshooting">Troubleshooting section</a> of vue-cordova's README.
    </div>
    <CreateToDo v-on:add-todo="addTodo($event)"/>
    <ToDoList v-bind:todos="todos"/>
  </div>
</template>

<script>
import Vue from 'vue'
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
      this.todos.unshift(toDo)
    }
  },
  data () {
    return {
      cordova: Vue.cordova,
      todos: []
    }
  },
  mounted () {
    if (localStorage.todos) {
      let savedToDos = JSON.parse(localStorage.todos)
      this.todos = savedToDos
    }
    alert(this.cordova)
  },
  watch: {
    todos (updatedTodos) {
      localStorage.todos = JSON.stringify(updatedTodos)
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
  color: #272822;
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
.ui.form .field>input, .ui.form input[type=text].vdatetime-input {
  font-size: 1.5em;
}
.header {
  font-weight: 700;
  overflow-wrap: break-word;
  line-height: initial;
}
.header, .meta, .ui.form .field>label, .ui.form .field>input, .ui.button.createBtn, .icons, .ui.form input[type=text].vdatetime-input {
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
.date {
  font-size: 0.65em;
}
.ui.form .field>input.errorField {
  border: 1px solid #DB2828;
}
input[disabled] {
  border: none;
  text-align: center;
}
</style>
