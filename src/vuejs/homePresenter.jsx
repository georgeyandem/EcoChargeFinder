import ContactView from "/src/views/contactView";  // Importing the ContactView component
import HomeView from "../views/homeView.jsx";
import TopbarView from "./topBarPresenter.jsx";


export default function Home(props) {
  return (
    <div>
      <TopbarView model={props.model} />
      <HomeView
        number={props.model.numberOfCharger}
        info={props.model.chargers}
      />
      {/* Add the ContactView component */}
      <ContactView />
    </div>
  );
}
