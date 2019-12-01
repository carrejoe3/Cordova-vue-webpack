<template>
  <div id="home">
    <sidebar-menu :menu="menu" />
    <CreateToDo />
    <ToDoList />
  </div>
</template>

<script>

import ToDoList from '../components/ToDoList'
import CreateToDo from '../components/CreateTodo'

export default {
  name: 'home',
  components: {
    ToDoList,
    CreateToDo
  },
  data () {
    return {
      menu: [
        {
          href: '/',
          title: 'Home',
          icon: 'fas fa-home'
        },
        {
          href: '/Categories',
          title: 'Categories',
          icon: 'fa fa-shapes'
        }
      ]
    }
  }
}
</script>
