import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import axios from 'axios'
import AnimateDirective from '@/directives/animate'
import { i18n, loadLanguageAsync } from '@/plugins/i18n'
import smoothscroll from 'smoothscroll-polyfill'

//Import CSS (Sass)
import 'swiper/scss'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '@/assets/sass/main.sass'

smoothscroll.polyfill()

const app = createApp(App)

// axios.defaults.baseURL = import.meta.env.MODE === 'development' ? 'http://localhost:4000/' : 'http://142.132.171.50:82/'
axios.defaults.baseURL = 'http://142.132.171.50:82/'
axios.defaults.headers.accept = 'application/json'

loadLanguageAsync()

app.use(createPinia())
app.use(i18n)
app.use(router)

app.directive('animate', AnimateDirective)

app.mount("#app")
