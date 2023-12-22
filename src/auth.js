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

import { getDatabase } from "firebase/database";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const app = initializeApp(config);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();
const dba = getFirestore(app);
// Function to save user data to Firestore
async function saveUserDataToFirestore(userId, username, email, photoURL) {
  const userRef = doc(dba, "users", userId);

  try {
    await setDoc(userRef, {
      username: username,
      email: email,
      photoURL: photoURL,
    });
    //console.log("User data saved to Firestore");
  } catch (error) {
    console.error("Error saving user data:", error);
  }
}
// Function to save the chosen result for the user
export function saveChosenResult(userId, chosenResult) {
  db.ref(`model/${userId}`).set({
    chosenResult: chosenResult,
  });
}

export async function getUserDataFromFirestore() {
  const userId = await getUserId(); // Get the user ID using getUserId function
  const userRef = doc(dba, "users", userId);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    // Document exists, retrieve its data
    const userData = docSnap.data();
    return userData; // Return the user data if needed
  } else {
    console.log("No such document!");
    return null;
  }
}

export function loginByGoogle() {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        saveUserDataToFirestore(
          user.uid,
          user.displayName,
          user.email,
          user.photoURL
        );
        resolve(user); // Resolve the promise with the user data
      })
      .catch((error) => {
        reject(error); // Reject the promise with the error
      });
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
        console.log("Email not verified. Please verify your email");
        alert("Please verify your email.");
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
export function signup(email, password, username) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      saveUserDataToFirestore(user.uid, username, email, null);
      sendEmailVerification(user); // send email verification to the user
      console.log("Signed up: " + username + " " + user.uid);
      alert("Signed up, Please verfiy your account!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("SignUp Error:", errorCode, errorMessage);
      // ..
    });
}

export function password_reset(email) {
  sendPasswordResetEmail(auth, email).then(() => {
    console.log("Password reset email has been sent!");
    alert("Password reset email has been sent!");
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

export function getUserId() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.uid); // Resolve with the user ID when available
      }
      unsubscribe(); // Unsubscribe immediately after obtaining the user ID
    });
  });
}
export { db };
