import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq4ekD7_OP9f2uykGrDiNH24PnaMGrjSE",
  authDomain: "shoptree-4a69c.firebaseapp.com",
  projectId: "shoptree-4a69c",
  storageBucket: "shoptree-4a69c.appspot.com",
  messagingSenderId: "1067726463868",
  appId: "1:1067726463868:web:d95b6a6a4dc63d1ded3af9",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
