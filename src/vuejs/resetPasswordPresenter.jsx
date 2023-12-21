import ResetPassView from "../views/resetPasswordView.jsx";
import { password_reset } from "../auth.js";
export default function Summary(props) {
  function resetACB() {
    password_reset(props.model.email);
    const lastVisitedPage = sessionStorage.getItem("lastVisitedPage");
    // Redirect the user to the last visited page or a default page if none was stored
    window.location.href = lastVisitedPage || "/"; // Redirect to last visited page or a default page
  }

  function emailACB(evt) {
    props.model.setEmail(evt);
  }

  return <ResetPassView resetPass={resetACB} onEmailChange={emailACB} />;
}
