<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
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
  components: {}
}
</script>
