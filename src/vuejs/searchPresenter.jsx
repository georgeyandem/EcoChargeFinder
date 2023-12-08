import SearchView from "../views/searchView.jsx";
import SearchResultView from "../views/searchResultsView.jsx";

export default function Summary(props) {
  function logicfunction(state) {
    if (!state.promise) {
      return;
    } else if (!state.data && !state.error) {
      return <img src="https://brfenergi.se/iprog/loading.gif"></img>;
    } else if (state.error) {
      return "" + props.model.searchResultsPromiseState.error;
    } else if (state.data) {
      function searchResultACB(evt) {
        props.model.setCurrentDish(evt.id);
      }

      return (
        <SearchResultView
          searchResults={state.data}
          onClickDish={searchResultACB}
        />
      );
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
      <SearchView
        //searchResults={searchACB}
        onTextChange={SearchTextACB}
        onButtonClick={searchACB}
        //onSelectChange={SearchTextACB}
      />
      {logicfunction(props.model.searchResultsPromiseState)}
    </div>
  );
}
