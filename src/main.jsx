import { createApp, watch} from "vue";
import {VueRoot} from "./VueRoot.jsx";
import { reactive } from "vue";
import model from "./HotellModel.js";
//import {connectToFirebase} from "./firebaseModel.js";

const reactiveModel = reactive(model);
const app = createApp(<VueRoot model={reactiveModel} />);
//app.use((reactiveModel));

//const app = createApp(App);
app.mount("#root");

/*function handleModelChange() {
  connectToFirebase(reactiveModel, watch);
}

// Watch for changes in reactiveModel's properties
watch(handleModelChange);*/

