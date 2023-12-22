import Topbar from "../views/topbarView.jsx";
import { getUserId, getUserDataFromFirestore } from "../auth.js";
import { logout } from "../auth.js";
// Import your pinia store
import { useFavoritesStore } from "../stores/counter";

export default function Summary(props) {
  function logoutACB() {
    logout();
    // Set user as logged out in localStorage
    localStorage.setItem("isLoggedIn", false);
    window.location.reload();
  }
  function infoACB() {
    getUserDataFromFirestore().then((userdata) => {
      props.model.setUsername(userdata.username);
      props.model.setPhotoURL(userdata.photoURL);
    });
  }

  function storeACB() {
    getUserId()
      .then((userId) => {
        console.log("User ID:", userId);
        return fetchUserFavorites(userId); // Returning the result of fetchUserFavorites
      })
      .catch((error) => {
        console.error("Error: user not logged in", error.message);
        throw error; // Rethrowing the error to handle it outside this function
      });
    async function fetchUserFavorites(userId) {
      try {
        const favoritesStore = useFavoritesStore(); // Access the pinia store instance
        const favorites = await favoritesStore.fetchFavorites(userId);
        console.log("User favorites:", favorites);
        // Use the fetched favorites in your application
        // ...

        props.model.setfavoritelist(favorites);
        localStorage.setItem(
          "favoritelist",
          JSON.stringify(props.model.favoritelist)
        ); // Save to local storage
        window.location.hash = "#/savedmarks";
      } catch (error) {
        console.error("Error fetching user favorites:", error);
        // Handle errors
      }
    }
  }

  return (
    <Topbar
      logoutUsingEmail={logoutACB}
      username={props.model.username}
      userinfo={infoACB}
      image={props.model.imgUrl}
      getstore={storeACB}
    />
  );
}
