<template>
  <div id="categories">
    <sidebar-menu :menu="menu" />
    <div class='ui bottom attached green basic button' v-on:click="addCategory()">
        Add
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(VueSidebarMenu)

export default {
  name: 'home',
  methods: {
    addCategory: () => {
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
