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
            <input v-model="titleText" type='text' ref='title' defaultValue="" v-bind:class="{ 'errorField': emptyTitleText }">
          </div>
          <div class='field'>
            <label>Remind me on</label>
            <datetime v-model="date" type="datetime"></datetime>
          </div>
          <button class='ui basic blue button createBtn' :disabled="emptyTitleText" v-on:click="sendForm()">
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
export default {
  data () {
    return {
      titleText: '',
      date: '',
      isCreating: false
    }
  },
  computed: {
    emptyTitleText: function () {
      return !this.titleText.length > 0
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      const title = this.titleText
      const date = this.date
      this.$emit('add-todo', {
        title: title,
        date: date,
        done: false
      })
      this.titleText = ''
      this.isCreating = false
    }
  }
}
</script>
