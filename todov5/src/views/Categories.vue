<template>
  <div id="categories">
    <sidebar-menu :menu="menu" />
    <div class='ui container'>
      <div class='ui bottom attached green basic button' v-on:click="addCategory()">
          Add
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    addCategory () {
      alert('add category por favor')
    }
  },
  data () {
    return {
      categories: [],
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
}
</script>

<style>

</style>
