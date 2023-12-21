import "/src/style.css";
function SearchView(props) {
  return (
    <div class="relative flex-1 md:min-w-[350px]" id="search">
      <input
        class="pl-9 pr-4 py-3 text-sm focus:outline-blue w-full shado-md rounded-md"
        placeholder="Search"
        onChange={textInputChange}
        onkeydown={handleKeyPress}
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
    props.onButtonClick();
  }
  function textInputChange(evt) {
    props.onTextChange(evt.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      props.onButtonClick();
    }
  }
}
export default SearchView;
