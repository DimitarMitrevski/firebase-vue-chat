import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBZE3XkqNRVdIlFENPC03ndfhyvi7KnhEk",
  authDomain: "firechat-vue-7a095.firebaseapp.com",
  projectId: "firechat-vue-7a095",
  storageBucket: "firechat-vue-7a095.appspot.com",
  messagingSenderId: "1063738605605",
  appId: "1:1063738605605:web:9bee19de774ad37f187fcc",
  measurementId: "G-XYJZ9X3CL5",
};

const db = firebase.initializeApp(config);
export default db;