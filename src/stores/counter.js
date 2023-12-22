import { defineStore } from "pinia";
// Initialize Firebase app and auth instance
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  limitToFirst,
  query,
  orderByKey,
} from "firebase/database";
import config from "../firebaseConfig";
import { get } from "firebase/database";
// Initialize Firebase app and auth instance
const app = initializeApp(config);
const db = getDatabase(app);

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: [],
  }),
  actions: {
    async fetchFavorites(userId) {
      // Fetch favorites logic remains unchanged
      // ...
    },

    // Function to save a new favorite for a user
    async saveFavorites(userId, newFavorite) {
      try {
        const favoritesRef = ref(db, `model/${userId}/favorites`);
        const snapshot = await get(favoritesRef);

        if (snapshot.exists()) {
          let existingFavorites = snapshot.val();

          if (!Array.isArray(existingFavorites)) {
            // If the existing data is not an array, convert it to an array
            existingFavorites = [existingFavorites];
          }

          // Push the new favorite to the existing array
          existingFavorites.push(newFavorite);

          // Limit the favorites to a maximum of 5
          const limitedFavorites = existingFavorites.slice(0, 5);

          await set(favoritesRef, limitedFavorites);
          console.log("New favorite added and saved successfully");
          return limitedFavorites;
        } else {
          // If favorites node doesn't exist, create it with the new favorite as an array
          await set(favoritesRef, [newFavorite]);
          console.log("New favorite added and saved successfully");
          return [newFavorite];
        }
      } catch (error) {
        console.error("Error saving favorite:", error);
        throw error;
      }
    },
  },
});
