import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import { Field, Toast,Collapse,CollapseItem,Popup,Icon } from 'vant';
import VueClipBoard from 'vue-clipboard2'
import 'vant/lib/index.css';
import i18n from "./locals" 
const app = createApp(App);
app.use(router)
app.use(Field);
app.use(Toast);
app.use(Collapse);
app.use(CollapseItem);
app.use(Popup)
app.use(Icon)
app.use(i18n)
app.mount("#app")
app.use(VueClipBoard)

// createApp(App).use(router).mount('#app')
