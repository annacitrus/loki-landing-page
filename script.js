import {addToWaitlist} from "./firestoreQueries.js";

function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {

    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();

    //checks if the email is valid
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    //send the email to the database
    addToWaitlist(email);
})