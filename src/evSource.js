import { BASE_URL, API_KEY ,API_HOST} from "./apiConfig.js";

function responseACB(response) {
  if (!response.ok) {
    throw new Error("Error: " + response.status);
  }
  return response.json();
}

function keepJustResultArrayACB(result) {
  return result.data;
}

function keepJustLocation(result) {
  return result.location;
}

function keepJustId(key) {
  return key.data.id;
}

function showDataACB(d){
  console.log(d); 
}

export function getHotelDetails(arr){
  const url = BASE_URL + "hotels/getHotelDetails?id=%3CREQUIRED%3E&checkIn=%3CREQUIRED%3E&checkOut=%3CREQUIRED%3E&currency=USD"; // {?id=}
  console.log("Before fetch call");
  return fetch (url, {
    method: "GET",
    headers: {
      "X-Mashape-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  }).then(responseACB).then(keepJustId).then(showDataACB);
  
}
/*export function getHotelDetails(array_of_hotel_ids) {   //getMenuDetails

  const dish_ids = array_of_hotel_ids.join(",");

  const url = BASE_URL + "hotels/getHotelDetails?id=" + dish_ids;

  console.log("Before fetch call");

  return fetch(url, {
    method: "GET",
    headers: {
      "X-Mashape-Key": API_KEY,
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  }).then(responseACB);
  
}
export function getHotelData(id) {     //getDishDetails
  return getHotelDetails([id]).then(myArrayToObjectACB).catch(errorACB);

  function myArrayToObjectACB(arr) {
    return arr[0];
  }
  function errorACB(error) {
    console.log("ERROR: " + error);
  }
}*/

/*export function searchDishes(searchParams) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const url = BASE_URL + "recipes/complexSearch?" + urlSearchParams.toString();

  return fetch(url, {
    method: "GET",
    headers: {
      "X-Mashape-Key": API_KEY,
    },
  })
    .then(responseACB)
    .then(keepJustResultArrayACB)
    .then(showDataACB);
}

// convert geocode to latitude and langitude
export function geocodingConverter(geoCode) {
  const url =
    "https://trueway-geocoding.p.rapidapi.com/Geocode?address=" + geoCode;
  return fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
    },
  })
    .then(responseACB)
    .then(keepJustLocation)
    .then(showDataACB);
}

export function searchLocation(query) {
  const url = BASE_URL + "hotels/searchLocation?query=" + query;
  return fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  })
    .then(responseACB)
    .then(keepJustId)
    .then(showDataACB);
}

export function searchHotelsByLocation(searchParams) {
  const urlSearchParams = new urlSearchParams(searchParams);
  const url = BASE_URL + "hotels/searchHotelsByLocation?" + urlSearchParams.toString();
  return fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  })
    .then(responseACB)
    .then(keepJustResultArrayACB)
    .then(showDataACB);
}
*/