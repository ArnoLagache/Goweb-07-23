import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import "./assets/styles/main.scss";

Vue.use(VueMeta);
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.use(VueMeta, {
  keyName: "head",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
