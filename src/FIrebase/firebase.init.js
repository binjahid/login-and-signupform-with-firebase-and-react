import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const fireBaseInitialization = () => {
  initializeApp(firebaseConfig);
};
export default fireBaseInitialization;
