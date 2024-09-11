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
import PaymentFailed from "./components/PaymentFailed.vue";
import AdminLogin from "./pages/AdminLogin.vue";
import store from "./store";
import ErrorPage from "./pages/ErrorPage.vue";

const user =
  JSON.parse(localStorage.getItem("currentUser")) ||
  JSON.parse(sessionStorage.getItem("currentUser"));

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "HomePage",
  },
  {
    path: "/cars",
    component: CarsPage,
    name: "CarsPage",
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
    beforeEnter: (from, to, next) => {
      const orderStatus = JSON.parse(sessionStorage.getItem("orderStatus"));
      if (user && orderStatus === "checkout") {
        next();
      } else {
        console.log(orderStatus);
        next("/error");
      }
    },
  },
  {
    path: "/profile/:id",
    component: ProfilePage,
    beforeEnter: (from, to, next) => {
      if (user && user.role === "renter") {
        next();
      } else {
        next("/error");
        console.log("user not logged in");
      }
    },
  },
  {
    path: "/admin",
    component: AdminDash,
    meta: {
      hideNavFoot: true,
    },
    beforeEnter(from, to, next) {
      const savedUser =
        localStorage.getItem("currentAdmin") ||
        sessionStorage.getItem("currentAdmin");
      if (!savedUser) {
        next("/adminlogin");
      } else {
        next();
      }
    },
  },
  {
    path: "/adminlogin",
    component: AdminLogin,
    meta: {
      hideNavFoot: true,
    },
  },
  {
    path: "/ownerdash/:id",
    component: OwnerDash,
    meta: {
      hideNavFoot: true,
    },
    beforeEnter: (from, to, next) => {
      if (user && user.role === "owner") {
        next();
      } else {
        next("/error");
        console.log("user not logged in");
      }
    },
  },
  {
    path: "/confirmpayment",
    component: ConfirmPayment,
    beforeEnter: (from, to, next) => {
      const orderStatus = JSON.parse(sessionStorage.getItem("orderStatus"));
      if (orderStatus === "confirm") {
        next();
      } else {
        next("/error");
      }
    },
  },
  {
    path: "/cancel",
    component: PaymentFailed,
  },

  { path: "/:pathMatch(.*)*", component: ErrorPage, alias: "/error" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

createApp(App).use(store).use(router).mount("#app");
