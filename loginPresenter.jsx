import LogInView from "../views/logInView.jsx";
import {
  login,
  logout,
  signup,
  password_reset,
  loginByGoogle,
} from "../auth.js";
export default function Summary(props) {
  //const state = props.model.currentDishPromiseState;
  //if (!state.promise) {
  //return "no data";
  //} else if (!state.data && !state.error) {
  //return <img src="https://brfenergi.se/iprog/loading.gif"></img>;
  //} else if (state.error) {
  //return "" + props.model.currentDishPromiseState.error;
  //} else if (state.data) {
  function passACB(evt) {
    props.model.setPassword(evt);
  }
  function emailACB(evt) {
    props.model.setEmail(evt);
  }
  function loginACB() {
    login(props.model.email, props.model.password);
  }
  function logoutACB() {
    logout();
  }
  function signupACB() {
    // signup(props.model.email, props.model.password);
    window.location.hash = "#/signup";
  }
  function resetACB() {
    password_reset(props.model.email);
  }
  function googleACB() {
    loginByGoogle();
  }
  return (
    <LogInView
      onPasswordChange={passACB}
      onEmailChange={emailACB}
      loginUsingEmail={loginACB}
      logoutUsingEmail={logoutACB}
      signupUsingEmail={signupACB}
      resetUsingEmail={resetACB}
      loginUsingGoogle={googleACB}
    />
  );
  //} else {
  //return "no data";
  //}
}
