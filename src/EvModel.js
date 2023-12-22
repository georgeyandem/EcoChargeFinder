import resolvePromise from "./resolvePromise.js";
import { searchMap, locationDetails } from "../src/evSource.js";
import { useFavoritesStore } from "../src/stores/counter.js"; // Import the store

export default {
  password: "",
  email: "",
  text: "",
  username: "",
  imgUrl: "",
  searchParams: {},
  geocode: "",
  searchResultsPromiseState: {},
  convertPromiseState: {},
  selectedResult: {},
  favoriteMarks: [],
  showMarksstate: {},
  favoritelist: null,
  location: "",
  locationDetailsPromiseState: {},

  setlocation(location) {
    this.location = location;
  },
  setfavoritelist(result) {
    this.favoritelist = [...result];
  },

  setselectedResult(result) {
    this.selectedResult.result = result;
  },

  setUsername(newUser) {
    this.username = newUser;
  },

  setPassword(newPass) {
    this.password = newPass;
  },

  setEmail(newEmail) {
    this.email = newEmail;
  },
  setPhotoURL(url) {
    this.imgUrl = url;
  },

  setSearch(location) {
    this.searchParams.location = location;
  },

  doSearch(searchParams) {
    const searchPromise = searchMap(searchParams.location);
    resolvePromise(searchPromise, this.searchResultsPromiseState);
  },

  doDetails() {
    const details = locationDetails(location);
    resolvePromise(details, this.locationDetailsPromiseState);
  },

  showFavoriteMarks() {
    const favoritesStore = useFavoritesStore(); // Access the store instance

    favoritesStore
      .fetchFavorites()
      .then(() => {
        this.favoriteMarks = favoritesStore.favorites;
        resolvePromise(this.favoriteMarks, this.showMarksstate);
      })
      .catch((error) => {
        console.error("Error fetching favorites:", error);
        // Handle the error
      });
  },
};
