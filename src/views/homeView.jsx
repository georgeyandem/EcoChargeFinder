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
        class="rounded-full w-96 h-96"
        src="/homeimage.jpg"
        alt="image description"
      ></img>
      <button class="forget-password-button" onClick={aboutACB}>
        About us
      </button>
      <button class="forget-password-button" onClick={findChargerACB}>
        find a charger
      </button>
      <div>{[...props.info].map(getinfoCB)}</div>
      <br />
      number of chargers: {props.number}
    </div>
  );
}
export default HomeView;
