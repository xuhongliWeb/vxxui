import { createApp } from 'vue'
import App from './app.vue'

const app = createApp(App)
import vxxui from "vxx-ui"

app.use(vxxui)
console.log(vxxui);

app.mount('#app')