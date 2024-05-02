import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import PrimeVue from "primevue/config";
import '@fortawesome/fontawesome-free/css/all.css'

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Card from "primevue/card";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import SelectButton from "primevue/selectbutton";
import Toolbar from "primevue/toolbar";

createApp(App)
    .use(router)
    .use(store)
    .use(PrimeVue,{ripple:true})
    .component('pv-card',Card)
    .component('pv-button',Button)
    .component('pv-select-button',SelectButton)
    .component('pv-sidebar',Sidebar)
    .component('pv-avatar',Avatar)
    .component('pv-menu',Menu)
    .component('pv-menubar',Menubar)
    .component('pv-toolbar',Toolbar)
    .mount('#app');