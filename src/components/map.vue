<template>
  <div class="h-screen relative">
    <ErrorModal
      @closeGeoError="closeError"
      v-if="geoError"
      :geoErrorMsg="geoErrorMsg"
    />
    <MapFeatures
      @getLocation="getLocation"
      :coords="coords"
      :fetchCoords="fetchCoords"
    />
    <div id="map" class="h-full z-[1]"></div>
  </div>
</template>

<script>
import leaflet from "leaflet";
import EventBus from "../Eventbus.js";
import {
  onMounted,
  onBeforeUnmount,
  ref,
  onUnmounted,
  onUpdated,
  watch,
} from "vue";
import mapMarkerRed from "../assets/map-marker-red.svg";
import mapMakerBlue from "../assets/map-marker-blue.svg";
import ErrorModal from "./ErrorModal.vue";
import MapFeatures from "./mapFeatures.vue";

export default {
  name: "Map",
  components: { ErrorModal, MapFeatures },
  props: ["prompt"],
  setup(props) {
    let map;
    const coords = ref(null);
    const fetchCoords = ref(null);
    const marker = ref(null);
    const geoError = ref(null);
    const geoErrorMsg = ref(null);

    let locationWatcher; // Store the location watcher to clear it later
    // Listen for 'resultClicked' event from SearchResultView

    function mapACB() {
      // init map
      map = leaflet.map("map").setView([59.3293, 18.0686], 10);

      // add tile layer
      leaflet
        .tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      setTimeout(() => {
        getLocation();
      }, 100); // Delay the geolocation call by 100 milliseconds
      // Run the plotResult function when the selectedResult prop changes
      EventBus.on("resultClicked", (results) => {
        // Call the plotResult function with the clicked results
        if (results && results.lat && results.lon) {
          plotResult(results);
        } else {
          console.error("Invalid or missing data in result clicked event.");
          // Handle the case when results are not as expected
        }
      });

      setTimeout(() => {
        let favoriteData = localStorage.getItem("locationClicked")
          ? JSON.parse(localStorage.getItem("locationClicked"))
          : {};
        if (favoriteData) {
          plotResult(favoriteData);
        }
      }, 100);
      // Listen for zoomend event on the map
    }

    onMounted(mapACB);
    onBeforeUnmount(() => {
      setTimeout(() => {
        // Emit an event when the map is about to unmount

        clearAllMarkers();
        EventBus.off("resultClicked");
        localStorage.removeItem("locationClicked");
        localStorage.removeItem("savedData");
        if (map) {
          map.off(); // Remove any event listeners from the map
          map.remove(); // Remove the map instance
        }
        if (locationWatcher) {
          navigator.geolocation.clearWatch(locationWatcher);
        }
        // Reset or clear reactive properties and variables
        fetchCoords.value = null;
        geoError.value = null;
        geoErrorMsg.value = null;
      }, 100);
    });
    // Method to update coordinates

    function getLocation() {
      if (coords.value) {
        coords.value = null;
        sessionStorage.removeItem("coords");
        map.removeLayer(marker.value);
        return;
      }
      //check if we have the coords
      if (sessionStorage.getItem("coords")) {
        coords.value = JSON.parse(sessionStorage.getItem("coords"));
        plotlocation(coords.value);
        return;
      }

      // else get coords from geolocation API
      fetchCoords.value = true;
      navigator.geolocation.getCurrentPosition(setCoords, getError);
    }

    function setCoords(pos) {
      //console.log(pos);
      //stop fetching coord
      fetchCoords.value = null;

      // set coord in session storage
      const setSessionCoord = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };

      sessionStorage.setItem("coords", JSON.stringify(setSessionCoord));

      // set ref coords value
      coords.value = setSessionCoord;

      plotlocation(coords.value);
    }

    function getError(err) {
      // if there is an error
      //console.log(err);
      fetchCoords.value = null;
      if (err.code === 1) {
        // User denied Geolocation
        geoError.value = true;
        geoErrorMsg.value = "User denied Geolocation";
      } else {
        // Other geolocation errors
        geoError.value = true;
        geoErrorMsg.value = err.message;
      }
    }

    function closeError() {
      geoError.value = null;
      geoErrorMsg.value = null;
    }

    function plotlocation(coords) {
      const CustomMarker = leaflet.icon({
        iconUrl: mapMarkerRed,
        iconSize: [30, 30],
      });
      //create new marker with the coords and icon
      marker.value = leaflet
        .marker([coords.lat, coords.lng], {
          icon: CustomMarker,
        })
        .addTo(map);
      // Adding a popup to the marker
      marker.value.bindPopup("Current Location").openPopup();
      // Adding a popup to the marker
      // set map view to current location
      map.setView([coords.lat, coords.lng], 12);
    }
    const resultMarker = ref(null);
    function clearAllMarkers() {
      map.removeLayer(resultMarker.value); // Remove each marker from the map
    }
    function plotResult(coords) {
      // check if resultmarker has value

      if (resultMarker.value) {
        map.removeLayer(resultMarker.value);
        resultMarker.value = null; // Reset the marker reference
      }
      const CustomMarker = leaflet.icon({
        iconUrl: mapMakerBlue,
        iconSize: [30, 30],
      });
      if (coords.lat && coords.lon) {
        //create new marker with the coords and icon
        resultMarker.value = leaflet
          .marker([coords.lat, coords.lon], {
            icon: CustomMarker,
          })
          .addTo(map);

        const popupContent = `<p>${coords.address.amenity}</p><a href="#/details" id="popupLink">More Details</a>`;
        resultMarker.value.bindPopup(popupContent).openPopup();
        // set map view to current location
        map.setView([coords.lat, coords.lon], 12);
      }
    }

    return {
      coords,
      fetchCoords,
      marker,
      closeError,
      geoError,
      geoErrorMsg,
      getLocation,
      plotResult,
    };
  },
};
</script>
