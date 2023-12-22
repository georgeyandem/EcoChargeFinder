import SearchView from "../views/searchView.jsx";
import SearchResultView from "../views/searchResultsView.jsx";
import Map from "../components/map.vue";
import TopbarView from "./topBarPresenter.jsx";
import Marklist from "../views/marklistView.jsx";
export default function Summary(props) {
  function logicfunction(state) {
    if (!state.promise) {
      return;
    } else if (!state.data && !state.error) {
      return <img src="https://brfenergi.se/iprog/loading.gif"></img>;
    } else if (state.error) {
      return "" + props.model.searchResultsPromiseState.error;
    } else if (state.data) {
      return <SearchResultView searchResults={state.data} />;
    } else {
      return "no data";
    }
  }

  function SearchTextACB(evt) {
    //console.log(evt);
    props.model.setSearch(evt);
  }

  function searchACB(evt) {
    props.model.doSearch(props.model.searchParams);
    props.model.searchParams;
  }

  return (
    <div>
      <TopbarView model={props.model} />
      <div class="w-full md:w-auto absolute md:top-[120px] md:left-[120px] z-[2] flex gap-4 px-6 py-8 md:px-0 md:py-0 bg-transparent sm:top-[120px]">
        <SearchView
          //searchResults={searchACB}
          onTextChange={SearchTextACB}
          onButtonClick={searchACB}
          //onSelectChange={SearchTextACB}
        />
        {logicfunction(props.model.searchResultsPromiseState)}
      </div>
      <Map model={props.model} />
    </div>
  );
}
