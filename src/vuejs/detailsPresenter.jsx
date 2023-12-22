import DetailsView from "../views/detailsView.jsx";
import { getUserId } from "../auth.js";
import { useFavoritesStore } from "../stores/counter";
import TopbarView from "./topBarPresenter.jsx";
export default function Summary(props) {
  function userACB() {
    const userFavorites = localStorage.getItem("savedData")
      ? JSON.parse(localStorage.getItem("savedData"))
      : [];
    getUserId()
      .then((userId) => {
        console.log("User ID:", userId);
        return saveFavorites(userId, userFavorites);
      })
      .then(() => {
        localStorage.removeItem("savedData");
        // Redirection only after all operations are done
        window.location.hash = "#/";
      })
      .catch((error) => {
        console.error("Error: user not logged in", error.message);
      });
  }

  // Function to save favorites
  async function saveFavorites(userId, favorites) {
    const favoritesStore = useFavoritesStore(); // Access the store instance

    try {
      // Assuming 'favorites' is not an array but an object or single item
      // You may need to adjust this logic based on the actual data structure
      const favoritesArray = [favorites]; // Convert single item into an array

      await favoritesStore.saveFavorites(userId, favoritesArray);
      console.log("Favorites saved successfully", favoritesArray);
      return favoritesArray; // Return the saved favorites if needed
    } catch (error) {
      console.error("Error saving favorites:", error);
      alert("Please login to use the favorite stations feature");
      throw error;
    }
  }
  console.log(props.model.locationDetailsPromiseState.state);
  return (
    <div>
      <TopbarView model={props.model} />
      <DetailsView
        favoritebutton={userACB}
        stationInfo={
          localStorage.getItem("savedData")
            ? JSON.parse(localStorage.getItem("savedData"))
            : {}
        }
      />
    </div>
  );
}
