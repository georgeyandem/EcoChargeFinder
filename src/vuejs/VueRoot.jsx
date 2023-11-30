//import Sidebar from "./sidebarPresenter.jsx";
//import Search from "./searchPresenter.jsx";
import Test from "../views/test.jsx"
import Home from "./homePresenter.jsx";


import {createRouter, RouterView, createWebHashHistory} from "vue-router";

export function makeRouter(model) {
    return createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: "/",
                component: <Test model={model} />
            },
            {
                path: "/home",
                component: <Home model={model.title} />
            },
    
        ]});
}

export function VueRoot(props){ 

  if (props.model.ready){  //props.model.ready // make it (1===0) to view else status
  return  ( 
    <div class="flex_parent">

      <div><Test model ={props.model}/></div> {/* ==> in the LAB : <Sidebar model={props.model} class="sidebar"/>*/}
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
