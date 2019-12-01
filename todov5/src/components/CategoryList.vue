<template>
  <div>
    <Category v-for="category in categories" v-bind:category="category" v-bind:key="category.id"></Category>
  </div>
</template>

<script type = "text/javascript" >

import Category from './Category'

export default {
  components: {
    Category
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}

</script>
