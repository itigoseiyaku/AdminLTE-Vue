import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "admin-lte";
import "admin-lte/dist/css/adminlte.css";
import "admin-lte/plugins/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
