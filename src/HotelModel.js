import resolvePromise from "./resolvePromise.js";
//import searchHotelsByLocation from "./hotelSource.js";

export default {
  hotels: [],
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
