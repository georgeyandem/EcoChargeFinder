import { createApp } from "vue";

const app = createApp(App);
app.mount("#root");

function handleModelChange() {
  connectToFirebase(reactiveModel, watch);
}

// Watch for changes in reactiveModel's properties
watch(handleModelChange);
