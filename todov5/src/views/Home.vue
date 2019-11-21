<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Plugins } from '@capacitor/core'

const { LocalNotifications } = Plugins

LocalNotifications.schedule({
  notifications: [
    {
      title: 'Title',
      body: 'Body',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000) },
      sound: null,
      attachments: null,
      actionTypeId: '',
      extra: null
    }
  ]
})

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
