<template>
  <div id="categories">
    <sidebar-menu :menu="menu" />
    <div class='ui container'>
      <div class="ui segment">
        <div class="content">
          <div class='ui form'>
            <div class='field'>
              <label>Name</label>
              <input type='text' v-model="categoryName" v-bind:class="{ 'errorField': emptyNameText }">
            </div>
            <button class='ui basic blue button closeBtn' v-on:click="addCategory" :disabled="emptyNameText">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    addCategory () {
      this.$store.commit('addCategory', this.categoryName)
    }
  },
  data () {
    return {
      categoryName: '',
      menu: [
        {
          href: '/',
          title: 'Home',
          icon: 'fas fa-home'
        },
        {
          href: '/Categories',
          title: 'Categories',
          icon: 'fas fa-shapes'
        }
      ]
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

<style>

</style>
