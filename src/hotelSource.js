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

function keepJustLocation(result) {
  return result.location;
}

function keepJustId(key) {
  return key.data.id;
}

function showData(d){
  console.log(d);
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
    .then(keepJustLocation)
    .then(showData);

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
    .then(showData);
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
    .then(keepJustResultArrayACB)
    .then(showData);
}
