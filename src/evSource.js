import { BASE_URL, API_KEY } from "./apiConfig.js";

function responseACB(response) {
  if (!response.ok) {
    throw new Error(`HTTP error, Status: ${response.status}`);
  }
  return response.json();
}

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

const city = "london";
const params = {
  q: "${city}, charging_station",
  format: "json",
  addressdetails: "addressdetails",
};
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
