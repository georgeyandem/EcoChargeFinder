//import resolvePromise from "./resolvePromise";
//import searchHotelsByLocation from "./hotelSource";

export default {
  numberOfCharger: 2,
  chargers: [{id:"1" , location:"Stockholm" , street:"kth-street"}], // this is only temporary, until API is fixed
  searchParams: {},
  currentEvPromiseState:{},
  searchResultsPromiseState:{},
}

  /*setSearchQuery(query) {
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
};*/
