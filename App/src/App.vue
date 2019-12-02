<template>
<ion-app>
  <router-view></router-view>
  <div id="bottomNavBar" class="drop-shadow">
    <router-link :to="{name: 'home'}">
      <div class="menuBtn"><i class="fa fa-home"></i></div>
    </router-link>
    <router-link :to="{name: 'categories'}">
      <div class="menuBtn"><i class="fa fa-stream"></i></div>
    </router-link>
  </div>
</ion-app>
</template>

<style lang="scss" scoped>

@import "src/assets/styles/colours";

#bottomNavBar {
  position: fixed;
  bottom: 0;
  height: 10%;
  background: $white;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.menuBtn i {
  font-size: 2em;
  color: $light-grey;
}

.router-link-exact-active i {
  color: $light-blue;
}

</style>
