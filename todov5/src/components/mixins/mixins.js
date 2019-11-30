import { LocalNotifications } from '@ionic-native/local-notifications'

export const NotificationMethods = {
  methods: {
    scheduleNotification (toDo) {
      LocalNotifications.schedule({
        id: toDo.id,
        text: toDo.title,
        at: new Date(toDo.date)
      })
    }
  }
}
