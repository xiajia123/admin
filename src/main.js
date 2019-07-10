import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./http";
import ElementUI from "element-ui";
import moment from "dayjs";
import VCharts from "v-charts";
import "element-ui/lib/theme-chalk/index.css";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import lodash from "lodash";
Vue.use(mavonEditor);
Vue.config.productionTip = false;
Vue.prototype.$axios = http;
Vue.prototype.$moment = moment;
Vue.prototype.$lodash = lodash;
Vue.use(ElementUI);
Vue.use(VCharts);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
