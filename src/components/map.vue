<template>
  <div class="h-screen relative">
    <ErrorModal
      @closeGeoError="closeError"
      v-if="geoError"
      :geoErrorMsg="geoErrorMsg"
    />
    <div id="map" class="h-full z-[1]"></div>
  </div>
</template>

<script>
import leaflet from "leaflet";
import { onMounted, onBeforeUnmount, ref } from "vue";
import mapMarkerRed from "../assets/map-marker-red.svg";
import ErrorModal from "./ErrorModal.vue";
export default {
  name: "Map",
  components: { ErrorModal },
  setup() {
    let map;
    const coords = ref(null);
    const fetchCoords = ref(null);
    const marker = ref(null);
    const geoError = ref(null);
    const geoErrorMsg = ref(null);

    function mapACB() {
      // init map
      map = leaflet.map("map").setView([28.538336, -81.379234], 10);

      // add tile layer
      leaflet
        .tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      getLocation();
    }

    onMounted(mapACB);
    onBeforeUnmount(() => {
      map.remove();
    });

    // Method to update coordinates

    function getLocation() {
      //check if we have the coords
      if (sessionStorage.getItem("coords")) {
        coords.value = JSON.parse(sessionStorage.getItem("coords"));
        plotlocation(coords.value);
        return;
      }
      fetchCoords.value = true;
      // user coords
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
      console.log(err);
      fetchCoords.value = null;
      geoError.value = true;
      geoErrorMsg.value = err.message;
    }

    function closeError() {
      geoError.value = null;
      geoErrorMsg.value = null;
    }

    function plotlocation(coords) {
      const marker = leaflet.icon({
        iconUrl: mapMarkerRed,
        iconSize: [30, 30],
      });
      //create new marker with the coords and icon
      marker.value = leaflet
        .marker([coords.lat, coords.lng], {
          icon: marker,
        })
        .addTo(map);

      // set map view to current location
      map.setView([coords.lat, coords.lng], 12);
    }

    return { coords, marker, closeError, geoError, geoErrorMsg };
  },
};
</script>
