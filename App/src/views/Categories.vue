<template>
  <div id="categories">
    <CreateCategory />
    <CategoryList v-show="!creatingCategory"/>
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
  computed: {
    categories () {
      return this.$store.state.categories
    },
    creatingCategory () {
      return this.$store.state.creatingCategory
    }
  }
}

</script>
