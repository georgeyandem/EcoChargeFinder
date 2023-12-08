import resolvePromise from "./resolvePromise.js";
import searchMap from "../src/hotelSource.js";

export default {
  password: "",
  email: "",
  text: "",
  searchParams: {},
  searchResultsPromiseState: {},

  setPassword(newPass) {
    this.password = newPass;
  },

  setEmail(newEmail) {
    this.email = newEmail;
  },

  setSearch(location) {
    this.searchParams.location = location;
    //this.searchParams.type = type;
  },

  doSearch(searchParams) {
    const searchPromise = searchMap(searchParams.location);
    resolvePromise(searchPromise, this.searchResultsPromiseState);
  },
};
