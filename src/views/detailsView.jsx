//import "/src/style.css";

export default function FavoriteButtonView(props) {
  function handleButtonClick() {
    props.favoritebutton();
  }

  return <button onClick={handleButtonClick}>Add to Favorites</button>;
}
