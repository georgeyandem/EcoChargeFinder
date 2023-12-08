function SearchResultView(props) {
  // check if there is result if not no need for the scroll
  return (
    <div class="absolute mt-14 w-full left-0 pr-4">
      {props.searchResults.map(mapACB)}
    </div>
  );

  function mapACB(results) {
    function clickHandler(evt) {
      console.log(props.onClickDish(results));
      //window.location.hash = "#/details";
    }
    const showScrollbar = props.searchResults
      ? "overflow-y-scroll"
      : "overflow-y-hidden";
    return (
      <div
        key={results.id}
        onClick={clickHandler}
        class={`h-[200px] bg-white rounded-md ${showScrollbar}`}
      >
        <div class="px-4 py-2 flex gap-x-2 cursor-pointer hover:bg-slate-600 hover:text-white">
          <i class="fa-solid fa-location-dot"></i>
          <p class="text-xs">{results.address}</p>
        </div>
      </div>
    );
  }
}

export default SearchResultView;
