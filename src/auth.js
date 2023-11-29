import { initializeApp } from "firebase/app";
import config from "./firebaseConfig.js";
import {
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const app = initializeApp(config);
const auth = getAuth(app);

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Logged in:", user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login Error:", errorCode, errorMessage);
    });
}

export function logout() {
  signOut(auth)
    .then(() => {
      // Logout successful, handle UI changes or redirect
      console.log("Logged out");
    })
    .catch((error) => {
      // Handle logout errors
      console.error("Logout Error:", error);
    });
}

export function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      sendEmailVerification(user); // send email verification to the user
      console.log("Signed up:", user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("SignUp Error:", errorCode, errorMessage);
      // ..
    });
}

// Check email verification status on sign-in
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (user.emailVerified) {
      console.log("Email is verified, proceed with app logic");
    } else {
      console.log(
        "Email is not verified, prompt the user to verify their email"
      );
    }
  } else {
    console.log("User is signed out");
  }
});

/*
// Example usage:
// Assume you have HTML elements with id="email", id="password", id="loginBtn", id="logoutBtn"

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  loginWithEmailPassword(email, password);
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  logout();
});
*/
