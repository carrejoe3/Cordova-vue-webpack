<template>
  <div id="categories">
    <sidebar-menu :menu="menu" />
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
  },
  data () {
    return {
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
