import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/reset.css'
import 'vant/lib/index.css'

import {
  Button,
  Tabbar,
  TabbarItem
} from 'vant'

const app = createApp(App)

app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)

app.use(createPinia())
app.use(router)

app.mount('#app')
