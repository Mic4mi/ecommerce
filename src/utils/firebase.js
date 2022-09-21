// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPW2EkWV6eg1Tpk0TjOsIjvycWSph-KsI",
    authDomain: "coderhouse-ecommerce-4ecb6.firebaseapp.com",
    projectId: "coderhouse-ecommerce-4ecb6",
    storageBucket: "coderhouse-ecommerce-4ecb6.appspot.com",
    messagingSenderId: "1063747941577",
    appId: "1:1063747941577:web:8b936c755402b934a5c918",
    measurementId: "G-050K41K90R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// DB Instance
export const db = getFirestore(app);