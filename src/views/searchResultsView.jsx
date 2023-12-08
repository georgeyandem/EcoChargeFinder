//import {sortIngredients} from "/src/utilities.js";
//import {menuPrice, sortDishes, dishType} from "/src/utilities.js";

function SearchView(props){

  function aboutACB(){
    window.location.hash="#/about";
  }
  function homeACB(){
    window.location.hash="#/"
  }
  function buttonClickACB(){
    console.log("Search button works!");
  }
  
    return (
        <div> 
            <button onClick={aboutACB}>About us</button>
            <button onClick={homeACB}>Back to Home</button>

            <input 
              type="text" 
              value={props.text || ""}
            />

            <button onClick={buttonClickACB}>Search!</button>
            <br />
        </div>);
}
export default SearchView;

