//import {sortIngredients} from "/src/utilities.js";
//import {menuPrice, sortDishes, dishType} from "/src/utilities.js";

function HomeView(props) {
  function aboutACB() {
    window.location.hash = "#/about";
  }
  function findChargerACB() {
    window.location.hash = "#/search";
  }

  function getinfoCB(e) {
    return (
      <span>
        <br />
        {e.id} - {e.location} - {e.street}
      </span>
    );
  }

  return (
    <div>
      <img
        class="rounded-full w-96 h-96 mx-auto"
        src="/homeimage.jpg"
        alt="image description"
      ></img>
      {/* <div class="mt-4">
        <button class="forget-password-button" onClick={aboutACB}>
          About us
        </button>
        <button class="forget-password-button" onClick={findChargerACB}>
          find a charger
        </button>
        <div>{[...props.info].map(getinfoCB)}</div>
        <br />
        Number of chargers: {props.number}
      </div> */}
    </div>
  );
}
export default HomeView;
