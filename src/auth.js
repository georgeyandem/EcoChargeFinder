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
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const app = initializeApp(config);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export function loginByGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      alert("Welcome " + user.displayName + " !");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
}
export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        // Signed in
        console.log("Logged in:", user.uid);
        alert("logged on " + user.email);
      } else {
        console.log("Email not verified. Please verify your email to log in.");
        alert("Please verify your email to log in.");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login Error:", errorCode, errorMessage);
    });
}

export function logout() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user.emailVerified) {
        // User is logged in and email is verified, proceed with logout
        signOut(auth)
          .then(() => {
            console.log("Logged out");
            alert("Logged out");
          })
          .catch((error) => {
            console.error("Logout Error:", error);
          });
      }
    } else {
      // User is not logged in, no action needed
      console.log("No user is signed in");
    }
  });
}
export function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      sendEmailVerification(user); // send email verification to the user
      console.log("Signed up: " + user.email);
      alert("Signed up");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("SignUp Error:", errorCode, errorMessage);
      // ..
    });
}

export function password_reset(email) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Password reset email sent!", user.uid);
      alert("Password reseted");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error can't reset your password", errorCode, errorMessage);
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
    console.log("No user is signed");
  }
});
