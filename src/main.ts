import { createApp } from 'vue';
import { Auth0 } from '@/auth';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faColumns,
  faUser,
  faPowerOff,
  faHome,
  faBars,
  faBolt,
  faChartLine,
  faArrowUp,
  faArrowDown,
  faStop,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Tabs from 'vue3-tabs';
import router from './plugins/router';
import client from './plugins/axios';
import './css/tailwind.css';

import App from './App.vue';

async function init() {
  const AuthPlugin = await Auth0.init({
    onRedirectCallback: (appState) => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname,
      );
    },
    clientId: process.env.VUE_APP_AUTH0_CLIENT_KEY,
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    redirectUri: window.location.origin,
  });
  const app = createApp(App);
  app.provide('$http', client);
  library.add(
    faColumns,
    faUser,
    faPowerOff,
    faHome,
    faBars,
    faBolt,
    faChartLine,
    faArrowUp,
    faArrowDown,
    faStop,
  );
  app
    .use(AuthPlugin)
    .use(router)
    .use(Tabs)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
}

init();
