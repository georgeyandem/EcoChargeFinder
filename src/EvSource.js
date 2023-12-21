import {
  BASE_URL,
  API_KEY,
  BASE_URL_Convert,
  API_KEY_Convert,
} from "./apiConfig.js";

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
  return result.results[0].address;
}

export function reverseGeoCode(geocode) {
  const url = BASE_URL_Convert + "location=" + geocode;
  return fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY_Convert,
    },
  })
    .then(responseACB)
    .then(keepJustResultArrayACB);
}

export function searchMap(city) {
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

const apiKey = "tpUgTDLO9rlEkee4cAlXjzMl5WPA75PU";
const chargingStationName = "Charging Station Name"; // Name of the charging station

// Use the TomTom Search API
const searchEndpoint = `https://api.tomtom.com/search/2/search/${chargingStationName}.json?key=${apiKey}&countrySet=US&lat=37.337&lon=-121.89&limit=1`;

// Make a GET request to retrieve charging station details
fetch(searchEndpoint)
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data here
    console.log(data);
    // Extract and display relevant details about the charging station
  })
  .catch((error) => {
    console.error("Error fetching charging station data:", error);
  });
