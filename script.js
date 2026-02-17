// Select elements from HTML
const totalDisplay = document.getElementById("totalAmount");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseList = document.getElementById("expenseList");
const button = document.querySelector("button");

let total = 0;

// Add click event
button.addEventListener("click", function () {

    // Get values from inputs
    const name = expenseName.value;
    const amount = Number(expenseAmount.value);

    // Prevent empty inputs
    if (name === "" || amount === "") {
        alert("Please enter expense name and amount");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.textContent = `${name} - KES ${amount}`;

    // Add item to list
    expenseList.appendChild(li);
    // Update total
    total += amount;
    totalDisplay.textContent = `Total: KES ${total}`;


    // Clear input fields
    expenseName.value = "";
    expenseAmount.value = "";
});
