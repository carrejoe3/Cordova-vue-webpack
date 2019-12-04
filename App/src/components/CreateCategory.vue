<template>
  <div class='ui container'>
    <button class='ui basic button icon circleBtn drop-shadow' v-on:click="openForm(); toggleCreatingCategory();" v-show="!creatingCategory && !selectingCategory">
      <i class='plus icon'></i>
    </button>
    <div class="ui segment drop-shadow" v-show="creatingCategory && !selectingCategory">
      <div class="content">
        <div class='ui form'>
          <div class='field'>
            <label>Name</label>
            <input type='text' ref="categoryNameInput" v-model="categoryName" v-bind:class="{ 'errorField': emptyNameText }">
          </div>
          <button class='ui basic blue button createBtn' v-on:click="toggleIconSelector">
            Select icon
          </button>
          <button class='ui basic blue button createBtn' v-on:click="addCategory(); toggleCreatingCategory();" :disabled="emptyNameText">
            Create
          </button>
          <button class='ui basic red button cancelBtn' v-on:click="toggleCreatingCategory">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div v-show="creatingCategory && selectingCategory">
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
      Vue.nextTick(() => {
        this.$refs.categoryNameInput.focus()
      })
    },
    toggleCreatingCategory () {
      this.$store.commit('toggleCreatingCategory')
    },
    addCategory () {
      const category = {
        id: this.$store.state.categories.length,
        name: this.categoryName
      }
      this.$store.commit('addCategory', category)
      this.categoryName = ''
    },
    toggleIconSelector () {
      this.selectingCategory = !this.selectingCategory
    }
  },
  data () {
    return {
      categoryName: '',
      selectingCategory: false
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    emptyNameText () {
      return !this.categoryName.length > 0
    },
    creatingCategory () {
      return this.$store.state.creatingCategory
    }
  }
}

</script>

<style lang="scss">

#iconPicker {
  max-width: 100%;
  background: none;
  .iconPicker__header {
    display: none;
  }
  .iconPicker__body {
    overflow: initial;
    border: none;
    border-radius: 0px;
  }
  .iconPicker__icons {
    .item {
      width: 16%;
      height: 16%;
      padding: 5%;
    }
  }
}

</style>
