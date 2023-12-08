//import {sortIngredients} from "/src/utilities.js";
//import {menuPrice, sortDishes, dishType} from "/src/utilities.js";

function SearchView(props) {
  return (
    <div class="relative flex-1 md:min-w-[350px]">
      <input
        class="pl-9 pr-4 py-3 text-sm focus:outline-blue w-full shado-md rounded-md"
        placeholder="Search"
        onChange={textInputChange}
        value={props.text || ""}
      />

      <div
        class="absolute top-0 left-[8px] h-full flex items-center"
        onClick={buttonClickACB}
      >
        <i class="fa-sharp fa-solid fa-magnifying-glass-location"></i>
      </div>
      <br />
    </div>
  );

  function buttonClickACB() {
    console.log("Search button works!");
    props.onButtonClick();
  }
  function textInputChange(evt) {
    props.onTextChange(evt.target.value);
  }
}
export default SearchView;
