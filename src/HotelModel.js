import {resolvePromise} from "./resolvePromise.js";
import {getHotelData} from "./hotelSource.js"


export default {
  numberOfGuests: 2,
  hotels: [],
  currentHotel: null,
  searchParams: {},
  searchResultsPromiseState: {},
  currentHotelPromiseState: {},

  setSearchQuery(query) {
    this.searchParams.query = query;
  },
  setCurrentHotel(id){
    //adding a new object property (currentHotel) which was not initialized in the constructor
    
    if(id !== this.currentHotel && id) {
        resolvePromise(getHotelData(id), this.currentHotelPromiseState);
    }

    this.currentHotel = id;
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
