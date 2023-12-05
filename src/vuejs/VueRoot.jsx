//import Sidebar from "./sidebarPresenter.jsx";
//import Search from "./searchPresenter.jsx";
import Home from "./homePresenter.jsx";


import {createRouter, RouterView, createWebHashHistory} from "vue-router";

export function makeRouter(model) {
    return createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: "/",
                component: <Home model={model} />
            },
    
        ]});
}

export function VueRoot(props){ 

  if (props.model.ready){  //props.model.ready // make it (1===0) to view else status
  return  ( 
    <div class="flex_parent">

      <div><Home model ={props.model}/></div>
      <div class="main_content"> <RouterView /> </div>

    </div>
  );
}
else {
  return (
            <div class="flex_parent">
                <div>
                  <img src="https://brfenergi.se/iprog/loading.gif"/>
                </div>
                <div class="main_content"> <RouterView />  </div>
            </div>
        );
    }  
}
export default VueRoot;
