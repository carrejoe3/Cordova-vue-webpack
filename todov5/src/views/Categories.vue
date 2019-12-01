<template>
  <div id="categories">
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
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}

</script>
