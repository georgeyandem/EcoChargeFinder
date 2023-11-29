import { initializeApp } from "firebase/app";
import config from "./firebaseConfig.js";
import {
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signOut,
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
      console.log("Signed In:", user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("SignIn Error:", errorCode, errorMessage);
      // ..
    });
}

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
