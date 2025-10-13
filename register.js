
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTKxBcIcBktiGz6PCKxc06u27FTKVRq2g",
    authDomain: "aidoe-fa943.firebaseapp.com",
    projectId: "aidoe-fa943",
    storageBucket: "aidoe-fa943.firebasestorage.app",
    messagingSenderId: "16541357001",
    appId: "1:16541357001:web:e315c71dc3a4b65ab48e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const submit = document.getElementById('Reg_Button')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    const email = document.getElementById('Reg_Email').value;
    const password = document.getElementById('Reg_Password').value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    document.getElementById('Reg_Email').value = '';
    document.getElementById('Reg_Password').value = '';

    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});
