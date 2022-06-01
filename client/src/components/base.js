import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBYjQ204RuBhuJFnj0MyAZL6ObfLP0XV1M",
    authDomain: "indian-plagiarism-tool.firebaseapp.com",
    databaseURL: "https://indian-plagiarism-tool-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "indian-plagiarism-tool",
    storageBucket: "indian-plagiarism-tool.appspot.com",
    messagingSenderId: "204343244106",
    appId: "1:204343244106:web:0c11ca4b5de3abd204fdb3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
console.log(auth.name);
export default app;