import { getMenuDetails } from "./dishSource";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "/src/teacherFirebase.js";
import firebaseConfig from "/src/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const PATH = "dinnerModel91";
//set(ref(db, PATH + "/test"), "dummy");

// Add relevant imports here
// TODO

// Initialise firebase app, database, ref
// TODO

function modelToPersistence(model) {
  // TODO return an object
  return {
    numberOfGuests: model.numberOfGuests,
    currentDishid: model.currentDish,
    dishesID: model.dishes.map(transformerCB).sort((a, b) => a - b),
  };

  function transformerCB(dish) {
    return dish.id;
  }
}

function persistenceToModel(data, model) {
  model.numberOfGuests = data?.numberOfGuests || 2;
  model.currentDish = data?.currentDishid || null;
  // return a promise, so we can chain this
  return getMenuDetails(data?.dishesID || []).then(saveToModel);
  // TODO return a promise

  function saveToModel(dishes) {
    model.dishes = dishes;
  }
}

function saveToFirebase(model) {
  if (model.ready) {
    const dataToSave = modelToPersistence(model);
    // Save to Firebase only if model is ready
    set(ref(db, PATH), dataToSave);
  }
}
function readFromFirebase(model) {
  model.ready = false;
  return get(ref(db, PATH))
    .then(function convertACB(snapshot) {
      // return promise
      return persistenceToModel(snapshot.val(), model);
    })
    .then(function setModelReadyACB() {
      model.ready = true;
    });
}
function connectToFirebase(model, watchFunction) {
  // TODO
  readFromFirebase(model);
  watchFunction(checkACB, effectACB);

  function checkACB() {
    return [model.numberOfGuests, model.currentDish, model.dishes];
  }
  function effectACB() {
    saveToFirebase(model);
  }
}
// Remember to uncomment the following line:
export {
  modelToPersistence,
  persistenceToModel,
  saveToFirebase,
  readFromFirebase,
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default connectToFirebase;
