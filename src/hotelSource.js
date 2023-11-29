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
    .then(keepJustLocation);
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
    .then(keepJustId);
}

export function searchHotelsByLocation(searchParams) {
  const urlSearchParams = new urlSearchParams(searchParams);
  const url =
    BASE_URL + "hotels/searchHotelsByLocation?" + urlSearchParams.toString();
  return fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  })
    .then(responseACB)
    .then(keepJustResultArrayACB);
}

// Assuming user input is captured in a variable called userInput

export function searchHotelsByUserInput(userInput) {
  const { location, checkInDate, checkOutDate } = userInput; // Assuming user input contains location, check-in, and check-out dates
  return searchLocation(location)
    .then((geoCode) => geocodingConverter(geoCode))
    .then((locationData) =>
      searchHotelsByLocation({
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        checkIn: checkInDate,
        checkOut: checkOutDate,
      })
    )
    .then((hotelResults) => {
      console.log("Hotel results:", hotelResults);
      return hotelResults; // Return hotel results for further processing or UI handling
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error; // Propagate the error for handling in the calling context
    });
}

const location = "London"; // Define a location to search
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
