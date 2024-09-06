import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/tailwind.css";
import HomePage from "./pages/HomePage.vue";
import CarsPage from "./pages/CarsPage.vue";
import CarPage from "./pages/CarPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import CheckoutPage from "./pages/CheckoutPage.vue";
import AdminDash from "./pages/AdminDash.vue";
import OwnerDash from "./pages/OwnerDash.vue";
import ConfirmPayment from "./pages/ConfirmPayment.vue";
import { Store } from "./Store";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/cars",
    component: CarsPage,
  },
  {
    path: "/cars/:id",
    component: CarPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/checkout",
    component: CheckoutPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/admin",
    component: AdminDash,
  },
  {
    path: "/ownerdash",
    component: OwnerDash,
    meta: {
      hideNavFoot: true,
    },
  },
  {
    path: "/confirmpayment",
    component: ConfirmPayment,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(Store).use(router).mount("#app");
