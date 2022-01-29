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
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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
  );
  app
    .use(AuthPlugin)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
}

init();
