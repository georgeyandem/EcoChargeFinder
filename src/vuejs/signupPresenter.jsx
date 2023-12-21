import SignupView from "../views/signupView";
import { signup, password_reset } from "../auth.js";
export default function Summary(props) {
  function signupACB() {
    signup(props.model.email, props.model.password, props.model.username);
    const lastVisitedPage = sessionStorage.getItem("lastVisitedPage");
    // Redirect the user to the last visited page or a default page if none was stored
    window.location.href = lastVisitedPage || "/"; // Redirect to last visited page or a default page
  }
  function userACB(evt) {
    props.model.setUsername(evt);
  }
  function emailACB(evt) {
    props.model.setEmail(evt);
  }
  function passACB(evt) {
    props.model.setPassword(evt);
  }
  return (
    <SignupView
      signupUsingEmail={signupACB}
      onUserChange={userACB}
      onEmailChange={emailACB}
      onPasswordChange={passACB}
    />
  );
}
