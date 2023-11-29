import Test from "../views/test.jsx";
import HomeView from "../views/homeView.jsx";
import LogInView from "../views/logInView.jsx";
//import Sidebar from "./sidebarPresenter.jsx";
//import Search from "./searchPresenter.jsx";
//import Details from "./detailsPresenter.jsx";

import { createRouter, RouterView, createWebHashHistory } from "vue-router";

export function VueRoot(props) {
  //makeRouter
  if (1 === 1) {
    //props.model.ready // make it (1===0) to view else status
    return (
      <div class="flex_parent">
        <div>
          <Test model={props.model} />
        </div>{" "}
        {/* ==> in the LAB : <Sidebar model={props.model} class="sidebar"/>*/}
        <div>
          <HomeView model={props.model} />
        </div>
        {/*<div class="main_content"> <RouterView /> </div>*/}
        <div>
          <LogInView model={props.model} />
        </div>
      </div>
    );
  } else {
    return (
      <div class="flex_parent">
        <div>
          <img src="https://brfenergi.se/iprog/loading.gif" />
        </div>
        {/*<div class="main_content"> <RouterView />  </div> */}
      </div>
    );
  }
}
export default VueRoot;

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
