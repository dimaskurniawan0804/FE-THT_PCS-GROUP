import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
// import Carousel from "primevue/carousel";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

// app.component("Carousel", Carousel);
app.use(router);

app.mount("#app");
