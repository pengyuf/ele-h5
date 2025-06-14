import { createApp } from 'vue'
import App from './App.vue'

import 'vant/lib/index.css'
import './assets/common.scss'

import router from './router'

const app = createApp(App)

app.use(router)

const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize =
  (deviceWidth * rootValue) / rootWidth + 'px'

app.mount('#app')
