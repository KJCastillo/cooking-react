import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVfyu73iuaE27oyTpuFM78eNG_LjhWjfM",
  authDomain: "cooking-react-site.firebaseapp.com",
  projectId: "cooking-react-site",
  storageBucket: "cooking-react-site.appspot.com",
  messagingSenderId: "657280482562",
  appId: "1:657280482562:web:c4d3574c2b16c7f7d6161b",
};


//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }