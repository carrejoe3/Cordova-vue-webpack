<template>
  <div class="ui container">
    <div class='ui segment drop-shadow'>
      <div class='content' v-show="!isEditing">
        <div class='icons'>
          <span class='right floated edit icon' v-on:click="showForm()">
            <i class='edit icon'></i>
          </span>
          <div class='header'>
            {{ category.name }}
          </div>
          <span class='right floated trash icon' v-on:click="removeCategory(category)">
            <i class='trash icon'></i>
          </span>
        </div>
      </div>
      <div class="content" v-show="isEditing">
        <div class='ui form'>
          <div class='field'>
            <label>Name</label>
            <input type='text' v-model="category.name" v-bind:class="{ 'errorField': emptyNameText }">
          </div>
            <button class='ui basic blue button closeBtn' v-on:click="hideForm(category);" :disabled="emptyNameText">
            Close X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  props: ['category'],
  data () {
    return {
      isEditing: false
    }
  },
  computed: {
    emptyNameText: function () {
      return !this.category.name.length > 0
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    hideForm (category) {
      this.$store.commit('editCategory', category)
      this.isEditing = false
    },
    removeCategory (category) {
      this.$store.commit('removeCategory', category)
    }
  }
}
</script>

<style lang="scss" scoped>
.icons, .header {
  margin-bottom: 0px;
}
</style>
