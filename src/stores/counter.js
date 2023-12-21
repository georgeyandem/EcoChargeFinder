import { defineStore } from "pinia";
// Initialize Firebase app and auth instance
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, set, get } from "firebase/database";
import config from "../firebaseConfig";

// Initialize Firebase app and auth instance
const app = initializeApp(config);
const auth = getAuth(app);
const db = getDatabase(app);
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }
  return { count, increment, decrement };
});

export const useFavoritesStore = defineStore({
  id: "favorites",
  state: () => ({
    userFavorites: {},
  }),
  actions: {
    // Action to save user's favorite marks to Firebase Realtime Database
    async saveUserFavorites(userId, favorites) {
      // Assuming you've initialized Firebase and obtained the database reference as `firebaseDatabaseRef`
      try {
        const databaseRef = child(ref(db), `model/${userId}/favorites`);
        await set(databaseRef, favorites);
        console.log("Favorites saved successfully");
      } catch (error) {
        console.error("Error saving favorites:", error);
      }
    },
    // Action to fetch user's favorite marks from Firebase Realtime Database
    async fetchUserFavorites(userId) {
      try {
        const databaseRef = child(ref(db), `model/${userId}/favorites`);
        const snapshot = await get(databaseRef);
        return snapshot.val() || {};
      } catch (error) {
        console.error("Error fetching favorites:", error);
        return {};
      }
    },
  },
});
