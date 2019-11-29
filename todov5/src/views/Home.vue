<template>
  <div id="home">
    <sidebar-menu :menu="menu" />
    <CreateToDo v-on:add-todo="addTodo($event)"/>
    <ToDoList v-bind:todos="todos" v-on:schedule-notification="scheduleNotification($event)"/>
  </div>
</template>

<script>

import Vue from 'vue'
import ToDoList from '../components/ToDoList'
import CreateToDo from '../components/CreateTodo'
import { LocalNotifications } from '@ionic-native/local-notifications'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(VueSidebarMenu)

export default {
  name: 'home',
  components: {
    ToDoList,
    CreateToDo
  },
  methods: {
    addTodo (toDo) {
      toDo.id = this.todos.length
      this.todos.unshift(toDo)
      if (toDo.date) this.scheduleNotification(toDo)
    },
    scheduleNotification (toDo) {
      LocalNotifications.schedule({
        id: toDo.id,
        text: toDo.title,
        at: new Date(toDo.date)
      })
    }
  },
  data () {
    return {
      todos: [],
      menu: [
        {
          href: '/',
          title: 'Home',
          icon: 'fa fa-user'
        },
        {
          href: '/Categories',
          title: 'Categories',
          icon: 'fa fa-user'
        }
      ]
    }
  },
  mounted () {
    if (localStorage.todos) {
      let savedToDos = JSON.parse(localStorage.todos)
      this.todos = savedToDos
    }
  },
  watch: {
    todos (updatedTodos) {
      localStorage.todos = JSON.stringify(updatedTodos)
    }
  }
}
</script>

<style lang="scss">
.container {
  margin-bottom: 2%;
}
.ui.segment, .ui.button.icon {
  font-size: 2em;
}
.ui.button {
  font-size: 1em;
}
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #272822;
  margin-top: 60px;
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
  background: none;
}
</style>
