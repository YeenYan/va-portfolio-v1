import { createApp } from "vue";
import { store } from "@/store";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "@/assets/base.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import App from "@/App.vue";

const app = createApp(App);

app.use(store);
app.mount("#app");
