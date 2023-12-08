import SearchView from "../views/searchView.jsx";
//import SearchResultView from "../views/searchResultView.jsx";

export default function Summary(props) {
  function searchTextACB(evt) {
    //console.log(evt);
    props.model.setSearch(evt);
  }
  function SearchQueryACB(evt) {
    props.model.setSearchQuery(evt);
  }

  function searchACB(evt) {
    props.model.doSearch(props.model.searchParams);
    console.log(props.model.searchParams);
  }

  return (
    <div>
      <SearchView
        //searchResults={searchACB}
        //text={props.model.searchParams.type} // Uppdaterat för att inkludera text-egenskapen
        onTextChange={searchTextACB}
        //onButtonClick={searchACB}
        //onSelectChange={SearchTextACB}
      />
    </div>
  );
}
