import { BASE_URL, API_KEY } from "./apiConfig.js";

function responseACB(response) {
  if (!response.ok) {
    throw new Error(`HTTP error, Status: ${response.status}`);
  }
  return response.json();
}

function arrayACB(array) {
  return array[0];
}

function keepJustResultArrayACB(result) {
  return result.data;
}

function keepJustLocation(results) {
  // the results array first element have the lat and lng
  return results.results[0].location;
}

function keepJustId(key) {
  return key.data;
}

export function getMenuDetails(array_of_dish_ids) {
  const dish_ids = array_of_dish_ids.join(",");
  const url = BASE_URL + "recipes/informationBulk?ids=" + dish_ids;
  return fetch(url, {
    method: "GET",
    headers: {
      "X-Mashape-Key": API_KEY,
    },
  }).then(responseACB);
}
export function getDishDetails(id) {
  return getMenuDetails([id]).then(arrayACB);
}
export function searchDishes(searchParams) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const url = BASE_URL + "recipes/complexSearch?" + urlSearchParams.toString();

  return fetch(url, {
    method: "GET",
    headers: {
      "X-Mashape-Key": API_KEY,
    },
  })
    .then(responseACB)
    .then(keepJustResultArrayACB);
}

const city = "london";
const params = {
  q: "${city}, charging_station",
  format: "json",
  addressdetails: "addressdetails",
};

export default function searchMap(city) {
  const param = {
    q: `${city}, charging_station`,
    format: "json",
    addressdetails: "addressdetails",
  };
  const urlSearch = new URLSearchParams(param);
  const url = BASE_URL + "search?" + urlSearch.toString();
  return fetch(url, {
    method: "GET",
    headers: {
      "X-API-Key": API_KEY,
    },
  }).then(responseACB);
}
/*
const key = params; // Define a location to search
searchMap(key)
  .then((result) => {
    console.log("Search Location Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
*/
/* 
searchLocation(location)
  .then((result) => {
    console.log("Search Location Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const geoCode = "505 Howard St, San Francisco";
geocodingConverter(geoCode)
  .then((results) => {
    console.log("Search geocode Result:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const lat = "latitude=40.730610&longitude=-73.935242";
searchHotelsByUserInput(lat)
  .then((results) => {
    console.log("Search geocode Result:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });**/
