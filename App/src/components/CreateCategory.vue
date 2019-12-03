<template>
  <div class='ui container'>
    <button class='ui basic button icon circleBtn drop-shadow' v-on:click="openForm" v-show="!isCreating && !selectingCategory">
      <i class='plus icon'></i>
    </button>
    <div class="ui segment drop-shadow" v-show="isCreating && !selectingCategory">
      <div class="content">
        <div class='ui form'>
          <div class='field'>
            <label>Name</label>
            <input type='text' ref="categoryNameInput" v-model="categoryName" v-bind:class="{ 'errorField': emptyNameText }">
          </div>
          <button class='ui basic blue button createBtn' v-on:click="toggleIconSelector">
            Select icon
          </button>
          <button class='ui basic blue button createBtn' v-on:click="addCategory" :disabled="emptyNameText">
            Create
          </button>
          <button class='ui basic red button cancelBtn' v-on:click="closeForm">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div v-show="isCreating && selectingCategory">
      <font-awesome-picker v-on:selectIcon="toggleIconSelector"></font-awesome-picker>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import { fontAwesomePicker } from 'font-awesome-picker'

export default {
  components: {
    'font-awesome-picker': fontAwesomePicker
  },
  methods: {
    openForm () {
      this.isCreating = true
      Vue.nextTick(() => {
        this.$refs.categoryNameInput.focus()
      })
    },
    closeForm () {
      this.isCreating = false
    },
    addCategory () {
      const category = {
        id: this.$store.state.categories.length,
        name: this.categoryName
      }
      this.$store.commit('addCategory', category)
      this.categoryName = ''
      this.isCreating = false
    },
    toggleIconSelector () {
      this.selectingCategory = !this.selectingCategory
    }
  },
  data () {
    return {
      categoryName: '',
      isCreating: false,
      selectingCategory: false
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    emptyNameText () {
      return !this.categoryName.length > 0
    }
  }
}
</script>
