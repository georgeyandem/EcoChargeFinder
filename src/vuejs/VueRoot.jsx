//import Sidebar from "./sidebarPresenter.jsx";
//import Search from "./searchPresenter.jsx";
import Home from "./homePresenter.jsx";
import About from "./aboutPresenter.jsx";
import Login from "./loginPresenter.jsx";
import TermsOfService from "./termsOfServicePresenter.jsx";
import PrivacyPolicy from "./privacyPolicyPresenter.jsx";
import Signup from "./signupPresenter.jsx";
import MapWithSearch from "./mapWithSearchPresenter.jsx";
import Details from "./detailsPresenter.jsx";
import BottombarView from "../views/bottombarView.jsx";
//import ContactView from "/src/views/contactView.jsx";
//import DescriptionView from "/src/views/descriptionView.jsx";
import { createRouter, RouterView, createWebHashHistory } from "vue-router";
import NotFound from "../components/NotFound.vue";
import ResetPass from "./resetPasswordPresenter.jsx";
import Marklist from "./marklistPresenter.jsx";

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
        path: "/details/",
        component: <Details model={model} />,
      },
      {
        path: "/login",
        component: <Login model={model} />,
      },
      {
        path: "/signup",
        component: <Signup model={model} />,
      },
      {
        path: "/reset",
        component: <ResetPass model={model} />,
      },
      {
        path: "/savedmarks",
        component: <Marklist model={model} />,
      },
      {
        path: "/terms",
        component: <TermsOfService />,
      },
      {
        path: "/privacy",
        component: <PrivacyPolicy />,
      },
      /*{
        path: "/contact",
        component: ContactView,
      },*/
      /*{
        path: "/description",
        component: DescriptionView,
      },*/

      {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: <NotFound />,
      },
    ],
  });
}

export function VueRoot(props) {
  if (1 === 1) {
    //props.model.ready // make it (1===0) to view else status
    return (
      <div>
        {/*<div><Home model ={props.model}/></div>*/}
        <div class="sidebar"></div>
        <div class="main_content">
          <RouterView />
          <BottombarView />
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
          <BottombarView />
        </div>
      </div>
    );
  }
}
export default VueRoot;
