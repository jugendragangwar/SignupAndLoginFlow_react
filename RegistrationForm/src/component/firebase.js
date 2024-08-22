import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNykWC-US39XvtI3bjxmYqhy_RngMabgI",
  authDomain: "registrationform-5fb54.firebaseapp.com",
  projectId: "registrationform-5fb54",
  storageBucket: "registrationform-5fb54.appspot.com",
  messagingSenderId: "565997682972",
  appId: "1:565997682972:web:4eacc8c496f314eea07ad9"
};


export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
