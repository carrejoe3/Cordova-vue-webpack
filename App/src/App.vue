<template>
<ion-app>
  <router-view></router-view>
  <div id="bottomNavBar">
    <router-link :to="{name: 'home'}">
      <button class="menuBtn"><i class="fa fa-home"></i></button>
    </router-link>
    <router-link :to="{name: 'categories'}">
      <button class="menuBtn"><i class="fa fa-stream"></i></button>
    </router-link>
  </div>
</ion-app>
</template>

<style lang="scss" scoped>

#bottomNavBar {
  position: fixed;
  bottom: 0;
  height: 10%;
  background: #ffffff;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.menuBtn {
  font-size: 2em;
}

</style>
