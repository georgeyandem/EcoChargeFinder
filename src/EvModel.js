import resolvePromise from "./resolvePromise.js";
import searchMap from "../src/evSource.js";

export default {
  password: "",
  email: "",
  text: "",
  username: "",
  imgUrl: "",
  searchParams: {},
  searchResultsPromiseState: {},

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
};
