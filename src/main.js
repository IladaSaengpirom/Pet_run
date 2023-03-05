import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import './assets/main.css'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1KL6_I0ZWiVdwQ0-p0cY5Z7fh1-CLbwg",
  authDomain: "dogcat-70a58.firebaseapp.com",
  projectId: "dogcat-70a58",
  storageBucket: "dogcat-70a58.appspot.com",
  messagingSenderId: "495660594258",
  appId: "1:495660594258:web:a4cb6f2893e94163ad1b8b",
  measurementId: "G-0066V815SS"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
