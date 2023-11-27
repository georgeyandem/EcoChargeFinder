// this file is same as index.jsx in LAB from "./src/vuejs/index.jsx"

import "/src/teacherFetch.js"; // protection against fetch() in infinite re-render
//import "/src/firebaseModel.js";

// (1) ------------ application state (model) -----------
import model from "/src/hotellModel.js";

import { reactive, createApp } from "vue";
const reactiveModel = reactive(model);

//import {createApp, watch} from "vue";
// needed in the lab because it works with both React and Vue

import { VueRoot } from "./VueRoot.jsx";
//import {VueRoot, makeRouter} from "./VueRoot.jsx";
//import connectToFirebase, { readFromFirebase } from "../firebaseModel.js";
const app = createApp(<VueRoot model={reactiveModel} />);

//app.use(makeRouter(reactiveModel));

app.mount("#root"); // WARNNING: LAB INSTRUCTIONS => mounts the app in the page DIV with the id "root"
// to see the DIV, look at vue.html in the developer tools Sources
// vue.html, with the content <div id="root"></div> is configured in vite.config.js

// Empty search
//reactiveModel.doSearch({});

//Connect model to realtime database
//connectToFirebase(reactiveModel, watch);

/*function handleModelChange() {
  connectToFirebase(reactiveModel, watch);
}

// Watch for changes in reactiveModel's properties
watch(handleModelChange);*/
