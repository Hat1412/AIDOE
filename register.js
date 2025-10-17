
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

const errorSolutions = {
    "auth/email-already-in-use": "This email is already registered. Try logging in or use a different email.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/operation-not-allowed": "Registration is currently disabled. Contact support.",
    "auth/weak-password": "Password is too weak. Use at least 6 characters.",
    "auth/missing-email": "Please enter your email address.",
    "auth/internal-error": "An internal error occurred. Please try again later.",
    "auth/network-request-failed": "Network error. Check your internet connection.",
    "auth/too-many-requests": "Too many attempts. Please wait and try again.",
    "auth/user-disabled": "This account has been disabled. Contact support.",
    "auth/password-does-not-meet-requirements": "Password Too Weak"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const submit = document.getElementById('Reg_Button')
const errorOutput = document.getElementById('result');

submit.addEventListener('click', function (e) {
    errorOutput.textContent = '';
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
            const solution = Object.keys(errorSolutions).find(key => errorCode.includes(key));
            errorOutput.textContent = solution ? errorSolutions[solution] : errorMessage;
            console.log(errorMessage);

        });

    if (!errorMessage) {
        document.getElementById('Reg_Email').value = '';
        document.getElementById('Reg_Password').value = '';
    }

    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');

    e.preventDefault();

});
