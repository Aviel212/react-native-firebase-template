import firebase from "firebase/compat";
import "@firebase/auth";
import "@firebase/firestore";
import { FIREBASE_APIKEY, FIREBASE_APPID } from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: "generic-list-manager.firebaseapp.com",
  databaseURL: "https://generic-list-manager.firebaseio.com",
  projectId: "generic-list-manager",
  storageBucket: "generic-list-manager.appspot.com",
  messagingSenderId: "242462988587",
  appId: FIREBASE_APPID,
  persistence: true,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
