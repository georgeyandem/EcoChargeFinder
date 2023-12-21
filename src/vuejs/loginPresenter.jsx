import LogInView from "../views/logInView.jsx";
import {
  login,
  password_reset,
  loginByGoogle,
  getUserDataFromFirestore,
} from "../auth.js";
export default function Summary(props) {
  function passACB(evt) {
    props.model.setPassword(evt);
  }
  function emailACB(evt) {
    props.model.setEmail(evt);
  }
  function loginACB() {
    login(props.model.email, props.model.password);
    // Set user as logged in in localStorage
    localStorage.setItem("isLoggedIn", true);
    // Retrieve the stored URL after login
    const lastVisitedPage = sessionStorage.getItem("lastVisitedPage");
    // Redirect the user to the last visited page or a default page if none was stored
    window.location.href = lastVisitedPage || "/"; // Redirect to last visited page or a default page
  }

  function resetACB() {
    password_reset(props.model.email);
  }
  function googleACB() {
    loginByGoogle()
      .then(() => {
        // Set user as logged in in localStorage
        localStorage.setItem("isLoggedIn", true);

        // Retrieve the stored URL after login
        const lastVisitedPage = sessionStorage.getItem("lastVisitedPage");

        // Redirect the user to the last visited page or a default page if none was stored
        window.location.href = lastVisitedPage || "/"; // Redirect to last visited page or a default page
      })
      .catch((error) => {
        // Handle any errors during login
        console.error("Error during Google login:", error);
        // Perform error handling or display a message to the user
      });
  }
  return (
    <LogInView
      onPasswordChange={passACB}
      onEmailChange={emailACB}
      loginUsingEmail={loginACB}
      resetUsingEmail={resetACB}
      loginUsingGoogle={googleACB}
    />
  );
  //} else {
  //return "no data";
  //}
}
