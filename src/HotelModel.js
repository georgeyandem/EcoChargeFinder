import {resolvePromise} from "./resolvePromise.js";
import {getHotelDetails} from "./hotelSource.js"


export default {
  numberOfGuests: 2,
  hotels: [],
  currentHotel: null,
  searchParams: {},
  searchResultsPromiseState: {},
  currentHotelPromiseState:{},

  setSearchQuery(query) {
    this.searchParams.query = query;
  },
  setCurrentHotel(arr){
    //adding a new object property (currentHotel) which was not initialized in the constructor
    
        resolvePromise(getHotelDetails(arr), this.currentHotelPromiseState);
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
