// Counter App

//Getting the HTML Elements

const decrementBtn = document.getElementById("decrementBy1");
const displayValue = document.getElementById("displayValue");
const incrementBtn = document.getElementById("incrementBy1");
const resetBtn = document.querySelector(".resetButton");

//Decrement Button Working Logics

decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
    }
    else {
        alert("Negative Values are Not Allowed")
    }
});

// Increment Button Working Logics
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    displayValue.innerText = value + 1;
})

// Reset Button Working Logics
resetBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText)
    displayValue.innerText = 0;
})