<template>
  <div id="categories">
    <sidebar-menu :menu="menu" />
    <CreateCategory />
  </div>
</template>

<script>

import CreateCategory from '../components/CreateCategory'

export default {
  name: 'categories',
  components: {
    CreateCategory
  },
  methods: {
  },
  data () {
    return {
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
    }
  }
}
</script>
