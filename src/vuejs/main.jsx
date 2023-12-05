// this file is same as index.jsx in LAB from "./src/vuejs/index.jsx"

import "/src/teacherFetch.js"; // protection against fetch() in infinite re-render
//import "/src/firebaseModel.js";

// (1) ------------ application state (model) -----------
import model from "/src/hotelModel.js";

import { reactive, createApp } from "vue";
const reactiveModel = reactive(model);


//import {createApp, watch} from "vue";

import { VueRoot } from "./VueRoot.jsx";
//import {VueRoot, makeRouter} from "./VueRoot.jsx";

//import connectToFirebase, { readFromFirebase } from "../firebaseModel.js";
const app = createApp(<VueRoot model={reactiveModel} />);

app.use(makeRouter(reactiveModel));

app.mount("#root"); // WARNNING: LAB INSTRUCTIONS => mounts the app in the page DIV with the id "root"
// to see the DIV, look at vue.html in the developer tools Sources
// vue.html, with the content <div id="root"></div> is configured in vite.config.js

// ------ for debug purposes ----------
//window.myModel= model;             // make the model available in the Console
window.myModel= reactiveModel;  

// Empty search
//reactiveModel.doSearch({});

//Connect model to realtime database
import {watch} from "vue";
//To make sure that the model is read from firebase when the app starts, as well as saved whenever it changes
//connectToFirebase(reactiveModel, watch); 