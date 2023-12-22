import "/src/style.css";
import EventBus from "../Eventbus.js";
function Marklist(props) {
  // check if there is result if not no need for the scroll
  const showScrollbar = props.searchResults
    ? "overflow-y-scroll"
    : "overflow-y-hidden";
  return (
    <div class="absolute mt-14 w-full left-0 ">
      <i class="fa-duotone fa-bookmark"></i>
      <div class={`h-[200px] bg-white rounded-md ${showScrollbar}`}>
        {props.searchResults.map(mapACB)}
      </div>
    </div>
  );

  function mapACB(results) {
    function clickHandler(evt) {
      props.selectedresultACB(results);
      // Serialize and save to localStorage
      localStorage.setItem("savedData", JSON.stringify(results));
      // props.onClickDish(results)
      //window.location.hash = "#/details";
      EventBus.emit("resultClicked", results);
    }

    return (
      <div class="px-4 py-2 flex gap-x-2 cursor-pointer hover:bg-slate-600 hover:text-white">
        <div key={results.id} onClick={clickHandler}>
          <i class="fa-solid fa-location-dot"></i>
          <p class="text-xs">{results.display_name}</p>
        </div>
      </div>
    );
  }
}

export default Marklist;
