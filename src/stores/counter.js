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
      try {
        const favoritesRef = ref(db, `model/${userId}/favorites`);
        const snapshot = await get(favoritesRef);

        if (snapshot.exists()) {
          const favoritesData = snapshot.val();
          // Assuming favoritesData is an array of favorites
          console.log("Favorites fetched successfully:", favoritesData);
          return favoritesData;
        } else {
          console.log("No favorites found for this user");
          return [];
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
        throw error;
      }
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
    async removeFromStore(userId, arrayToRemove) {
      try {
        const favoritesRef = ref(db, `model/${userId}/favorites`);
        const snapshot = await get(favoritesRef);

        if (snapshot.exists()) {
          let arrayOfArrays = snapshot.val();

          if (!Array.isArray(arrayOfArrays)) {
            arrayOfArrays = [];
          }

          let foundIndex = -1;

          arrayOfArrays.some((array, index) => {
            // Compare the content of the arrays
            if (JSON.stringify(array) === JSON.stringify(arrayToRemove)) {
              foundIndex = index;
              return true; // Stop iteration
            }
            return false;
          });

          if (foundIndex !== -1) {
            // Remove the array with content equality found at the specific index
            arrayOfArrays.splice(foundIndex, 1);

            await set(favoritesRef, arrayOfArrays);
            console.log("Array removed successfully");
            return arrayOfArrays;
          } else {
            console.log("Array not found with the given content");
            return arrayOfArrays;
          }
        } else {
          console.log("No data found for this user");
          return [];
        }
      } catch (error) {
        console.error("Error removing array:", error);
        throw error;
      }
    },
  },
});
