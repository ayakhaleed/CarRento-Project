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
import AdminLogin from "./pages/AdminLogin.vue";

import store from "./store";

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
    path: "/cars/checkout/:id",
    component: CheckoutPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/admin",
    component: AdminDash,
    meta: {
      hideNavFoot: true,
    },
    beforeEnter(to,from,next){
      const savedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
      if(!savedUser){
        next('/adminlogin');
      }
      else{
        next();
      }
    }
  },
  {
    path: "/adminlogin",
    component: AdminLogin,
    meta: {
      hideNavFoot: true,
    },
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

createApp(App).use(store).use(router).mount("#app");
