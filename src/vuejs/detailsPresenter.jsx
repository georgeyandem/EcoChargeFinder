import DetailsView from "../views/detailsView.jsx";
import { getUserId } from "../auth.js";
import { useFavoritesStore } from "../stores/counter";
import TopbarView from "./topBarPresenter.jsx";
export default function Details(props) {
  function userACB() {
    const userFavorites = { favorite1: true, favorite2: true };
    let user = null;
    getUserId()
      .then((userId) => {
        user = userId;
        console.log("User ID:", user);
        saveFavorites(user, userFavorites);
      })
      .catch((error) => {
        console.error("Error: user not logged in", error.message);
      });
  }

  function saveFavorites(userId, favorites) {
    const favoritesStore = useFavoritesStore();

    return favoritesStore
      .saveUserFavorites(userId, favorites)
      .then(() => favoritesStore.fetchUserFavorites(userId))
      .then((updatedFavorites) => {
        console.log("Updated Favorites:", updatedFavorites);
        return updatedFavorites; // Return the updated favorites
      })
      .catch((error) => {
        console.error("Error saving favorites:", error);
        throw error; // Throw the error to be caught by the caller if needed
      });
  }
  /*
  function fetchFavorites(userId) {
    const favoritesStore = useFavoritesStore();
    favoritesStore
      .fetchUserFavorites(userId)
      .then((favorites) => console.log("User Favorites:", favorites))
      .catch((error) => console.error("Error:", error));
  }*/

  return (
    <div>
      <TopbarView model={props.model} />
      <DetailsView favoritebutton={userACB} />
    </div>
  );
}
