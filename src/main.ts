import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import VueApexCharts from "vue3-apexcharts";
import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";
import "./assets/tailwind.css";
import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.component("default-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);

app.use(router).use(pinia).use(VueApexCharts).use(Toast).mount("#app");
