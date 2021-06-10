importScripts("https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.6.5/firebase-messaging.js")

var firebaseConfig = {
  apiKey: "AIzaSyCOn9SEWZdu8hB1dVS8hrtL6qHM7HcfHsA",
  authDomain: "gatsbydigitf.firebaseapp.com",
  projectId: "gatsbydigitf",
  storageBucket: "gatsbydigitf.appspot.com",
  messagingSenderId: "270349362428",
  appId: "1:270349362428:web:35a8913953e1cb3cace379",
  measurementId: "G-T1WECS9BT8"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
self.addEventListener('notificationclick', function (event) {
  console.debug('SW notification click event', event)
  const url = event.notification?.data?.FCM_MSG?.data?.link;
  // ...
})
const messaging = firebase.messaging()