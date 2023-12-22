import SearchView from "../views/searchView.jsx";
import SearchResultView from "../views/searchResultsView.jsx";
import Map from "../components/map.vue";
import TopbarView from "./topBarPresenter.jsx";
import EventBus from "../Eventbus.js";
export default function Summary(props) {
  function logicfunction(state) {
    if (!state.promise) {
      return null; // Render nothing if no promise is present
    } else if (!state.data && !state.error) {
      return <img src="https://brfenergi.se/iprog/loading.gif" alt="Loading" />; // Render loading GIF
    } else if (state.error) {
      return <p>Error: {state.error}</p>; // Render the error message
    } else if (state.data) {
      function clickhandler(results) {
        // Serialize and save to localStorage
        localStorage.setItem("savedData", JSON.stringify(results));
        EventBus.emit("resultClicked", results);
      }
      return (
        <SearchResultView searchResults={state.data} clickACB={clickhandler} />
      ); // Render search results
    } else {
      return "No data"; // Fallback if none of the conditions match
    }
  }

  function searchTextACB(evt) {
    //console.log(evt);
    props.model.setSearch(evt);
  }

  function searchACB(evt) {
    props.model.doSearch(props.model.searchParams);
  }

  function moredetails() {
    props.model.doDetails();
    console.log(props.model.locationDetailsPromiseState.state);
  }

  return (
    <div>
      <TopbarView model={props.model} />
      <div class="w-full md:w-auto absolute md:top-[120px] md:left-[120px] z-[2] flex gap-4 px-6 py-8 md:px-0 md:py-0 bg-transparent sm:top-[120px]">
        <SearchView
          //searchResults={searchACB}
          onTextChange={searchTextACB}
          onButtonClick={searchACB}
          //onSelectChange={SearchTextACB}
        />
        {logicfunction(props.model.searchResultsPromiseState)}
      </div>
      <Map handleMoreDetailsACB={moredetails} />
    </div>
  );
}
