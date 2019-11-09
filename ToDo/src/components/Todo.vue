<template>
  <div class="ui container">
    <div class='ui segment'>
      <div class='content' v-show="!isEditing">
        <div class='icons'>
          <span class='right floated edit icon' v-on:click="showForm">
            <i class='edit icon'></i>
          </span>
          <span class='right floated trash icon' v-on:click="deleteTodo(todo)">
            <i class='trash icon'></i>
          </span>
        </div>
        <div class='header'>
          {{ todo.title }}
        </div>
        <div class="meta">
          {{ todo.date }}
        </div>
      </div>
      <div class="content" v-show="isEditing">
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input type='text' v-model="todo.title" >
          </div>
          <div class='field'>
            <label>Date</label>
            <input type='date' v-model="todo.date" >
          </div>
          <button class='ui basic blue button closeBtn' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
      <div class='ui bottom attached green basic button' v-show="!isEditing &&todo.done">
          Completed
      </div>
      <div class='ui bottom attached red basic button' v-show="!isEditing && !todo.done" v-on:click="completeTodo(todo)">
          Complete
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['todo'],
  data () {
    return {
      isEditing: false,
      done: false
    }
  },
  methods: {
    deleteTodo (todo) {
      this.$emit('delete-todo', todo)
    },
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    },
    completeTodo (todo) {
      this.$emit('complete-todo', todo)
    }
  }
}
</script>
