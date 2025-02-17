// Create the button element
const button = document.createElement("button");
button.textContent = "Return to the activities";
button.classList.add("return_btn_sticky");

/* Add click event to navigate to Activities.html */
button.addEventListener("click", () => {
    window.location.href = "Activities.html";
});

// Append the button to the body
document.body.appendChild(button);