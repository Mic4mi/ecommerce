import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPW2EkWV6eg1Tpk0TjOsIjvycWSph-KsI",
    authDomain: "coderhouse-ecommerce-4ecb6.firebaseapp.com",
    projectId: "coderhouse-ecommerce-4ecb6",
    storageBucket: "coderhouse-ecommerce-4ecb6.appspot.com",
    messagingSenderId: "1063747941577",
    appId: "1:1063747941577:web:8b936c755402b934a5c918",
    measurementId: "G-050K41K90R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);