
import resolvePromise from "./resolvePromise";
//import searchHotelsByLocation from "./hotelSource";

export default {
  chargers: [],
  searchParams: {},
  searchResultsPromiseState: {},


  setSearchQuery(query) {
    this.searchParams.query = query;
  },

  //set search type "checkin, checkout"
  setSearchType(type) {
    this.searchParams.type = type;
  },
  // searching
  doSearch(searchParams) {
    const searchPromise = searchHotelsByLocation(searchParams);
    resolvePromise(searchPromise, this.searchResultsPromiseState);
  },
};
