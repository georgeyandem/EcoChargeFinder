import Test from "./views/test.jsx"
//import Sidebar from "./sidebarPresenter.jsx";

import {createRouter, RouterView, createWebHashHistory} from "vue-router";

export function VueRoot(props){ //makeRouter
  //if (props.model.ready) {
  return  ( 
    <div> {/* this div should be like: <div class="flex_parent">*/}

      <div><Test model ={props.model}></Test></div> {/* ==> in the LAB : <Sidebar model={props.model} class="sidebar"/>*/}

    </div>
  );
}
/* else {
  return (
            <div class="flex_parent">
                <div>
                    <img src="https://brfenergi.se/iprog/loading.gif"/>
                </div>
                <div class="main_content">
                    <RouterView />
                </div>
            </div>
        );
  } 
*/
export default VueRoot;
/*
if (props.model.ready) {
        return (
            <div class="flex_parent">
                <div>
                    <Sidebar model={props.model} class="sidebar"/>
                </div>
                <div class="main_content">
                    <RouterView />
                </div>
            </div>
        );
    }
}*/

/*export function makeRouter(model) {
    return createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: "/",
                component: <Search model={model} />
            },
            {
                path: "/search",
                component: <Search model={model} />
            },
            {
                path: "/details",
                component: <Details model={model} />
            },
            {
                path: "/summary",
                component: <Summary model={model} />
            }
        ]});
}*/

/********************     Louai    *****************************/

/*import { createRouter, createWebHistory } from 'vue-router' // import {createRouter, RouterView, createWebHashHistory} from "vue-router";
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router*/
