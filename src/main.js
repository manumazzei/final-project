
import "../firebase.config";
import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import fabric from "fabric";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import fabric from 'fabric';
import './assets/main.css'
import "../firebase.config";


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  }
})
import "@/modules/auth";

import "@/modules/photos";

const app = createApp(App);

app.use(router);

app.use(vuetify);
app.mount("#app");


