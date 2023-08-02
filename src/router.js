import Index from "@/views/";
import ProductsManagement from "@/views/ProductsManagement.vue";
import ProductDetails from "@/views/ProductDetails.vue";

import Vue from "vue";
import VueRouter from "vue-router";
import Meta from "vue-meta";

Vue.use(VueRouter);
Vue.use(Meta);

//Définition des routes de l'app, avec ajout de redirection vers la page 'Products'
export const myRoutes = [
  {
    path: "/",
    component: Index,
    children: [
      { path: "/products", component: ProductsManagement, exact: true },
      { path: "/products/:productId", component: ProductDetails, exact: true },
      { path: "/*", redirect: "/products" },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes: myRoutes,
});

export default router;
