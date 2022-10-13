import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/mocks/Home.vue";
import Contacts from "../components/mocks/Contacts.vue";
import About from "../components/mocks/About.vue";
import Vk from "../components/mocks/Vk.vue";
import NotFound from "../components/mocks/NotFound.vue";
import Params from "../components/mocks/Params.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/contacts",
    component: Contacts,
    name: "contacts",
    children: [
      {
        path: "vk",
        name: "vk",
        component: Vk,
      },
    ],
  },
  {
    path: "/params/:id",
    component: Params,
    name: "Params",
  },
  {
    path: "/about",
    component: About,
    name: "about",
  },
  {
    path: "/:pathMath(.*)",
    component: NotFound,
    name: "NotFound",
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
});


export default router;
