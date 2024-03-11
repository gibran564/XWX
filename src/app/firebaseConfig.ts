import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-cIp-ZqcHxnDqyk8pWPx4zbtjETFGGcc",
    authDomain: "xweather-579a3.firebaseapp.com",
    databaseURL: "https://xweather-579a3-default-rtdb.firebaseio.com/",
    projectId: "xweather-579a3",
    storageBucket: "xweather-579a3.appspot.com",
    messagingSenderId: "849330736437",
    appId: "1:849330736437:web:05337e94b5f182d955d07c",
    measurementId: "G-DLFR0SNQLL"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export default db;
