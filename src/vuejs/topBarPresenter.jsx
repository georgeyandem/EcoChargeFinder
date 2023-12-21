import Topbar from "../views/topbarView.jsx";
import { getUserId, getUserDataFromFirestore } from "../auth.js";
import { logout } from "../auth.js";
export default function Summary(props) {
  function logoutACB() {
    logout();
    // Set user as logged out in localStorage
    localStorage.setItem("isLoggedIn", false);
    window.location.reload();
  }
  function infoACB() {
    getUserDataFromFirestore().then((userdata) => {
      props.model.setUsername(userdata.username);
      props.model.setPhotoURL(userdata.photoURL);
    });
  }

  return (
    <Topbar
      logoutUsingEmail={logoutACB}
      username={props.model.username}
      userinfo={infoACB}
      image={props.model.imgUrl}
    />
  );
}
