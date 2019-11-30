<template>
  <div id="home">
    <sidebar-menu :menu="menu" />
    <CreateToDo />
    <!-- <ToDoList v-bind:todos="todos" v-on:schedule-notification="scheduleNotification($event)"/> -->
  </div>
</template>

<script>

// import ToDoList from '../components/ToDoList'
import CreateToDo from '../components/CreateTodo'

export default {
  name: 'home',
  components: {
    // ToDoList,
    CreateToDo
  },
  data () {
    return {
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
  }
  // watch: {
  //   todos (updatedTodos) {
  //     localStorage.todos = JSON.stringify(updatedTodos)
  //   }
  // }
}
</script>

<style lang="scss">

</style>
