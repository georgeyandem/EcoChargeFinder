import Test from "../views/test.jsx";
import HomeView from "../views/homeView.jsx";
import LogInView from "../vuejs/loginpresenter.jsx";
import Map from "/src/components/map.vue";
import SearchView from "../vuejs/searchPresenter.jsx";

import { createRouter, RouterView, createWebHashHistory } from "vue-router";
import SearchResultView from "../views/searchResultView.jsx";

export function VueRoot(props) {
  //makeRouter
  if (1 === 1) {
    //props.model.ready // make it (1===0) to view else status
    return (
      <div>
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
        <div class="w-full md:w-auto absolute md:top-[120px] md:left-[60px] z-[2] flex gap-4 px-6 py-8 md:px-0 md:py-0 bg-transparent">
          <div>
            <SearchView model={props.model} />
          </div>
        </div>
        <div>
          <Map model={props.model} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
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
