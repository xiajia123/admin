import Vue from "vue";
import Router from "vue-router";
import shouye from "./views/Shouye.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "shouye",
      component: shouye
    },
    {
      path: "/fabu",
      name: "fabu",
      component: () => import("./views/Fabu.vue")
    },
    {
      path: "/tongji",
      name: "tongji",
      component: () => import("./views/Tongji.vue")
    },
    {
      path: "/fabiao",
      name: "fabiao",
      component: () => import("./views/Fabiao.vue")
    },
    {
      path: "/biaoqian",
      name: "biaoqian",
      component: () => import("./views/Biaoqian.vue")
    },
    {
      path: "/daochu",
      name: "daochu",
      component: () => import("./views/Daochu.vue")
    },
    {
      path: "/tupian",
      name: "tupian",
      component: () => import("./views/Tupian.vue")
    },
    {
      path: "/tuichu",
      name: "tuichu",
      component: () => import("./views/Tuichu.vue")
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("./views/Signin.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register")
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.path === "/signin" || to.path === "/register") {
    next();
  } else {
    if (localStorage.name) {
      next();
    } else {
      next({ path: "/signin" });
    }
  }
});
export default router;
