import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//LayoutPlugin, ModalPlugin, CardPlugin, VBScrollspyPlugin, DropdownPlugin, TablePlugin

import App from './App.vue'
import router from './router'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(BootstrapVue)
// app.use(IconsPlugin)
// app.use(LayoutPlugin)
// app.use(ModalPlugin)
// app.use(CardPlugin)
// app.use(VBScrollspyPlugin)
// app.use(DropdownPlugin)
// app.use(TablePlugin)

app.mount('#app')
