<template>
<ion-app>
   <sidebar-menu :menu="menu" :collapsed="collapsed"/>
   <router-view></router-view>
</ion-app>
</template>

<script>

export default {
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
          icon: 'fa fa-shapes'
        }
      ],
      collapsed: true
    }
  }
}

</script>
