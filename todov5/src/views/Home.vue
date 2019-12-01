<template>
  <div id="home">
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
  }
}

</script>
