//import Sidebar from "./sidebarPresenter.jsx";
//import Search from "./searchPresenter.jsx";
import Home from "./homePresenter.jsx";
import About from "./aboutPresenter.jsx";
import Login from "./loginPresenter.jsx";
import TopbarView from "./topBarPresenter.jsx";
import MapWithSearch from "./mapWithSearchPresenter.jsx";

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
        component: <MapWithSearch model={model} />,
      },
      {
        path: "/login",
        component: <Login model={model} />,
      },
      // {
      //   path: "/:catchAll(.*)",
      //   name: "NotFound",
      //   component: NotFound
      // }
    ],
  });
}

export function VueRoot(props) {
  if (1 === 1) {
    //props.model.ready // make it (1===0) to view else status
    return (
      <div>
        {/*<div><Home model ={props.model}/></div>*/}
        <div class="sidebar">
          <TopbarView model={props.model} />
        </div>
        <div class="main_content">
          <RouterView />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <img src="https://brfenergi.se/iprog/loading.gif" />
        </div>
        <div class="main_content">
          <RouterView />
        </div>
      </div>
    );
  }
}
export default VueRoot;
