import Marklist from "../views/marklistView.jsx";
import TopbarView from "./topBarPresenter.jsx";
import { useFavoritesStore } from "../stores/counter.js"; // Import the Pinia store
import { getUserId } from "../auth.js";

export default function Summary(props) {
  function moveToLocation(evt) {
    localStorage.setItem("locationClicked", JSON.stringify(evt));
    console.log(evt);
    window.location.hash = "#/search";
  }

  async function removemarker(favoriteToRemove) {
    try {
      const favoritesStore = useFavoritesStore(); // Get an instance of the store
      const userId = await getUserId(); // Wait for the user ID

      console.log("User ID:", userId);

      // Call removeFromStore from the store instance
      const updatedFavorites = await favoritesStore.removeFromStore(
        userId,
        favoriteToRemove
      );

      // Handle success
      console.log("Favorite removed successfully:", updatedFavorites);
      window.location.hash = "#/";
      alert("The station is removed successfully");
    } catch (error) {
      // Handle errors
      console.error("Error:", error.message);
      alert("Error: Something went wrong");
    }
  }
  return (
    <div>
      <TopbarView model={props.model} />
      <Marklist
        favoriteData={
          localStorage.getItem("favoritelist")
            ? JSON.parse(localStorage.getItem("favoritelist"))
            : {}
        }
        tomapACB={moveToLocation}
        removemark={removemarker}
      />
    </div>
  );
}
