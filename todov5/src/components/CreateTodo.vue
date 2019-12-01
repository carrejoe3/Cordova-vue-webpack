<template>
  <div class='ui container'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui segment' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text' ref='titleInput' defaultValue="" v-bind:class="{ 'errorField': emptyTitleText }">
          </div>
          <div class='field'>
            <label>Category</label>
            <select v-model="category">
              <option v-for="category in categories" :key="category.id">{{category.name}}</option>
            </select>
          </div>
          <div class='field'>
            <label>Remind me on</label>
            <datetime v-model="date" type="datetime"></datetime>
          </div>
          <button class='ui basic blue button createBtn' :disabled="emptyTitleText" v-on:click="addToDo()">
            Create
          </button>
          <button class='ui basic red button cancelBtn' v-on:click="closeForm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import { NotificationMethods } from './mixins/mixins.js'

export default {
  mixins: [NotificationMethods],
  data () {
    return {
      titleText: '',
      date: '',
      category: '',
      isCreating: false
    }
  },
  computed: {
    emptyTitleText: function () {
      return !this.titleText.length > 0
    },
    categories: function () {
      return this.$store.state.categories
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
      Vue.nextTick(() => {
        this.$refs.titleInput.focus()
      })
    },
    closeForm () {
      this.isCreating = false
    },
    addToDo () {
      const toDo = {
        id: this.$store.state.todos.length,
        title: this.titleText,
        category: this.category,
        date: this.date,
        done: false
      }
      this.$store.commit('addTodo', toDo)
      if (toDo.date) this.scheduleNotification(toDo)
      this.titleText = ''
      this.isCreating = false
    }
  }
}
</script>
