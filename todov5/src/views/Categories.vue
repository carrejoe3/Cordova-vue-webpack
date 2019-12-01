<template>
  <div id="categories">
    <sidebar-menu :menu="menu" />
    <CreateCategory />
    <CategoryList />
  </div>
</template>

<script>

import CreateCategory from '../components/CreateCategory'
import CategoryList from '../components/CategoryList'

export default {
  name: 'categories',
  components: {
    CreateCategory,
    CategoryList
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
