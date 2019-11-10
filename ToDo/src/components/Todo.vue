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
        <div class="meta date">
          <datetime v-model="todo.date" type="datetime" input-class="disabledDateTime" disabled></datetime>
        </div>
      </div>
      <div class="content" v-show="isEditing">
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input type='text' v-model="todo.title" v-bind:class="{ 'errorField': emptyTitleText }">
          </div>
          <div class='field'>
            <label>Remind me on</label>
            <datetime v-model="todo.date" type="datetime"></datetime>
          </div>
          <button class='ui basic blue button closeBtn' v-on:click="hideForm" :disabled="emptyTitleText">
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
  computed: {
    emptyTitleText: function () {
      return !this.todo.title.length > 0
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
