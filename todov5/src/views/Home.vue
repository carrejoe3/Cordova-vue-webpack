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

</style>
