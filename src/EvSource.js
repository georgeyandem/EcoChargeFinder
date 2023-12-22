import {
  BASE_URL,
  API_KEY,
  API_KEY_TOMTOM,
  BASE_URL_TOMTOM,
  API_KEY_Image,
  BASE_URL_Image,
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
const chargingStationAddress =
  "Mer Häljarp station, Häljenäsvägen, Häljarps mölla, Sverige"; // Name of the charging station

// Use the TomTom Search API
const searchEndpoint = `https://api.tomtom.com/search/2/search/${encodeURIComponent(
  chargingStationAddress
)}.json?key=${apiKey}&countrySet=SE&limit=1`;

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

export function locationDetails(chargingStationAddress) {
  const url =
    BASE_URL_TOMTOM +
    chargingStationAddress +
    `.json?key=${API_KEY_TOMTOM}&countrySet=SE&limit=1`;
  // Make a GET request to retrieve charging station details
  fetch(url)
    .then(responseACB)
    .catch((error) => {
      console.error("Error fetching charging station data:", error);
    });
}
