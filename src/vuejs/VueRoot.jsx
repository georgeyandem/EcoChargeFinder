//import Sidebar from "./sidebarPresenter.jsx";
//import Search from "./searchPresenter.jsx";
import Home from "./homePresenter.jsx";
import About from "./aboutPresenter.jsx";
import Search from "./searchPresenter.jsx";
import Map from "/src/components/map.vue";
import Login from "./loginPresenter.jsx";

import { createRouter, RouterView, createWebHashHistory } from "vue-router";

export function makeRouter(model) {
  return createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: "/",
        component: <Home model={model} />,
      },
      {
        path: "/about",
        component: <About model={model} />,
      },
      {
        path: "/search",
        component: (
          <div>
            <div class="w-full md:w-auto absolute md:top-[120px] md:left-[60px] z-[2] flex gap-4 px-6 py-8 md:px-0 md:py-0 bg-transparent">
              <Search model={model} />
            </div>
            <Map model={model} />
          </div>
        ),
      },
      {
        path: "/login",
        component: <Login model={model} />,
      },
    ],
  });
}

export function VueRoot(props) {
  if (1 === 1) {
    //props.model.ready // make it (1===0) to view else status
    return (
      <div class="flex_parent">
        {/*<div><Home model ={props.model}/></div>*/}
        <div class="main_content">
          {" "}
          <RouterView />{" "}
        </div>
      </div>
    );
  } else {
    return (
      <div class="flex_parent">
        <div>
          <img src="https://brfenergi.se/iprog/loading.gif" />
        </div>
        <div class="main_content">
          {" "}
          <RouterView />{" "}
        </div>
      </div>
    );
  }
}
export default VueRoot;
