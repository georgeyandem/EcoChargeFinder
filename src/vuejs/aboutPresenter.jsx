import AboutView from "../views/aboutView";
import TopbarView from "./topBarPresenter.jsx";
export default function About(props) {
  return (
    <div>
      <TopbarView model={props.model} />
      <AboutView />
    </div>
  );
}
